$.ready(function() {

  var National = {
    orgiNationalData: {},
    nationalData: {},
    idCartChange: function() {
      var self = this
      jQuery('#J_cardType').bind('change', function() {
        var idCartNumber = jQuery(this).val();
        self.setNationalData(idCartNumber);
        // console.log(idCartNumber)
      })
    },
    filterNationalData: function(arg) {
      var source = cQuery.copy(this.orgiNationalData);
      var _ret;
      if (arg.length) {
        jQuery.map(arg, function(v, k) {
          source.data = source.data.replace(v, '');
        })
      }
      return source;
    },
    loadNationalData: function() {
      var self = this;
      cQuery.loader.jsonp('http://webresource.c-ctrip.com/code/cquery/resource/address/flightintl/nationality_gb2312.js', {
        charset: 'gb2312',
        onload: function(data) {
          if (jQuery.isEmptyObject(this.nationalData)) {
            self.handleNationalData(data.data, data.suggestion['']);
            self.orgiNationalData = data;
          }
          // self.initNationalData();
          self.setNationalData(jQuery('#J_cardType').val());
          self.idCartChange();
        }
      })
    },

    handleNationalData: function(data, sug) {
      var self = this;
      var reg = new RegExp('@([^@]*\\|[^@]*\\|[^@]*)@', 'gi');
      this.nationalData = {};
      jQuery.map(data.match(reg), function(v, k) {
        var _ref = v.replace('@', '').replace('@', '').split('|');
        self.nationalData[_ref[2]] = _ref[1];
      });
      jQuery.map(sug, function(v, k) {
        self.nationalData[v.data.split('|')[2]] = v.display;
      });
    },

    setNationalData: function(idCartNumber) {

      if (idCartNumber === '2') {
        this.addressNational.set('source', {
          data: this.filterNationalData(['@HongKong|中国香港|HK', '@Macau|中国澳门|MO', '@Taiwan|中国台湾|TW']).data,
          suggestion: {
            '': [{
              "display": "中国大陆",
              data: "China|中国大陆|CN",
              rightDisplay: 'China'
            }, {
              "display": "美国",
              data: "United States|美国|US",
              rightDisplay: 'United States'
            }, {
              "display": "英国",
              data: "United Kingdom|英国|GB",
              rightDisplay: 'United Kingdom'
            }, {
              "display": "日本",
              data: "Japan|日本|JP",
              rightDisplay: 'Japan'
            }, {
              "display": "加拿大",
              data: "Canada|加拿大|CA",
              rightDisplay: 'Canada'
            }, {
              "display": "法国",
              data: "France|法国|FR",
              rightDisplay: 'France'
            }, {
              "display": "韩国",
              data: "Korea,Republic of|韩国|KR",
              rightDisplay: 'Korea,Republic of'
            }, {
              "display": "德国",
              data: "Germany|德国|DE",
              rightDisplay: 'Germany'
            }]
          }
        });
      } else if (idCartNumber === '7') {
        this.addressNational.set('source', {
          data: ['@HongKong|中国香港|HK', '@Macau|中国澳门|MO'],
          suggestion: {
            '': [{
              display: "中国香港",
              data: "HongKong|中国香港|HK",
              rightDisplay: 'China HongKong'
            }, {
              display: "中国澳门",
              data: "Macau|中国澳门|MO",
              rightDisplay: 'China Macau'
            }]
          }
        })
      } else if (idCartNumber === '1') {
        this.addressNational.set('source', {
          data: '@China|中国大陆|CN@',
          suggestion: {
            '': [{
              "display": "中国大陆",
              data: "China|中国大陆|CN",
              rightDisplay: 'China'
            }]
          }
        })
      } else {
        this.addressNational.set('source', this.orgiNationalData);
      }
    },

    regNationalAddr: function() {
      var self = this;
      cQuery.mod.load('address', '1.0', jQuery.proxy(function() {
        this.addressNational = self.regNational(cQuery('#J_national')[0]);

        // 国籍改变绑定事件
        this.addressNational.method('bind', 'change', function(event, data) {
          // role.national.attr('mod_value', data.items[2]);
        });

        // 国籍改变绑定事件
        this.addressNational.method('bind', 'userinput', function(a, b) {
          // if (b.data) {
          //   vdata.dfNational = b.data;
          // }
          // if (vdata.dfNational) {
          //   dfNational = vdata.dfNational.split('|');
          //   me.setNational(dfNational[1], dfNational[2]);
          // }
          // me.checkNationality();
        });
        this.loadNationalData();

      }, this))
    },

    regNational: function(el) {
      return cQuery(el).regMod('address', '1.0', {
        jsonpSource: 'http://webresource.c-ctrip.com/code/cquery/resource/address/flightintl/nationality_gb2312.js',
        charset: 'gb2312',
        name: '#J_national',
        isFocusNext: true,
        template: {
          filterInit: function(c) {
            var d = c.find('a[data]');
            if (d.length) {
              d.attr('href', '###');
              // self.data.dfNational = d.first().attr('data'); //记录默认的国籍
            }
            d.bind('click', function(event) {
              event.preventDefault();
            })
          },
          isSuggestionSelect: true,
          suggestionInit: function(c) {
            var me = this;
            var d = c.find('a[data]');
            var selectedItem = d.first().addClass('hover');
            var selectContent = function(s) {
              var items = d,
                newSelectedItem;
              if (!selectedItem) {
                newSelectedItem = items[s == 'down' ? 0 : items.length - 1];
              } else {
                newSelectedItem = items[items.indexOf(selectedItem) + (s == 'down' ? 1 : -1)];
                jQuery(selectedItem).removeClass('hover');
                if (!newSelectedItem) {
                  if (s == 'down')
                    newSelectedItem = items[0];
                  else
                    newSelectedItem = items[items.length - 1];
                }
              }
              if (newSelectedItem) {
                jQuery(newSelectedItem).addClass('hover');
                selectedItem = newSelectedItem;
              } else {
                selectedItem = undefined;
              }
            };
            var fn = function(event) {
              var b = event.target,
                key = event.which,
                s, val;
              if (key === 13) {
                s = d.filter('[class="hover"]');
                if (s) {
                  // self.data.dfNational = s.attr('data');
                  // val = self.data.dfNational.split('|');
                  // jQuery(el).val(val[1]).attr('mod_value', val[2]).blur();
                }
              }
              if (key === 40) {
                selectContent('down');
              }
              if (key === 38) {
                selectContent('up');
              }
            };
            var initSuggest = function() {
              d.removeClass('hover');
              selectedItem = d.first().addClass('hover');
            };
            if (d.length) {
              // self.data.dfNational = d.filter('[class="hover"]').attr('data'); //记录默认的国籍
            }
            d.bind('mouseover', function() {
              jQuery(this).addClass('hover')
            }).bind('mouseout', function() {
              jQuery(this).removeClass('hover')
            });
            jQuery(el).bind('blur', function() {
              jQuery(c).hide();
            }).bind('focus', function() {
              jQuery(c).show();
              initSuggest();
            }).bind('keyup', fn);
          },
          filterStyle: '.c_address_hd { height: 24px; border-color: #2C7ECF; border-style: solid; border-width: 1px 1px 0; background-color: #67A1E2; color: #fff; line-height: 24px; padding-left: 10px; }\
                        .c_address_bd { border-color: #999999; border-style: solid; border-width: 0 1px 1px; overflow: hidden; padding:10px; }\
                        .c_address_select { width:276px; height:355px; font-family: Arial, Simsun; font-size: 12px; }\
                        .c_address_wrap { width: 276px; height:349px; min-height: 305px; margin: 0; padding: 0 0 4px; border: 1px solid #969696; background:#fff; text-align: left; }\
                        .c_address_hd { margin:-1px; }\
                        .c_address_list { margin: 0; padding: 0; height:300px; }\
                        .c_address_list label { border-bottom: 1px solid #FFFFFF; border-top: 1px solid #FFFFFF; display: block; height: 22px; line-height: 22px; min-height: 22px; overflow: hidden; padding: 1px 9px 0; text-align: center; }\
                        .c_address_list span { float: right; font: 10px/22px verdana; margin: 0; overflow: hidden; padding: 0; text-align: right; white-space: nowrap; width: 110px; }\
                        .c_address_list a { border-bottom: 1px solid #FFFFFF; border-top: 1px solid #FFFFFF; color: #0055AA; cursor: pointer; display: block; height: 22px; line-height: 22px; min-height: 22px; overflow: hidden; padding: 1px 9px 0; text-align: left; text-decoration: none; }\
                        .c_address_list a.hover { background: none repeat scroll 0 0 #E8F4FF; border-bottom: 1px solid #7F9DB9; border-top: 1px solid #7F9DB9; }\
                        .address_selected { background: none repeat scroll 0 0 #FFE6A6; color: #FFFFFF; height: 22px; }\
                        .c_address_pagebreak { line-height: 25px; margin: 0; padding: 0; text-align: center; }\
                        .c_address_pagebreak a { color: #0055AA; display: inline-block; font-family: Arial, Simsun, sans-serif; font-size: 14px; margin: 0; padding: 0 4px; text-align: center; text-decoration: underline; width: 15px; }\
                        a.address_current { color: #000; text-decoration: none; }',
          suggestion: '<div class="c_address_select"><div class="c_address_wrap"><div class="c_address_hd">' + '输入中英文|代码搜索或↑↓选择.' + '</div><div style="" class="c_address_list">{{enum(key,arr) data}}{{each arr}}<a href="###" title="${display}" data="${data}"><span>${rightDisplay}</span>${display}</a>{{/each}}{{/enum}}</div></div></div>',
          suggestionStyle: '.c_address_select { width:276px; height:355px; font-family: Arial, Simsun; font-size: 12px; }.c_address_hd { height: 24px; border-color: #2C7ECF; border-style: solid; border-width: 1px 1px 0; background-color: #67A1E2; color: #fff; line-height: 24px; text-align:center }.c_address_bd { border-color: #999999; border-style: solid; border-width: 0 1px 1px; overflow: hidden; padding:10px; }.c_address_select { width:222px; height:300px; font-family: Arial, Simsun; font-size: 12px; }.c_address_wrap { width: 276px; height:310px; min-height: 305px; margin: 0; padding: 0 0 4px; border: 1px solid #969696; background:#fff; text-align: left; } .c_address_hd { margin:-1px; }.c_address_list { margin: 0; padding: 0; height:300px; }.c_address_list span { float: right; font: 10px/22px verdana; margin: 0; overflow: hidden; padding: 0; text-align: right; white-space: nowrap; width: 110px; }.c_address_list a { border-bottom: 1px solid #FFFFFF; border-top: 1px solid #FFFFFF; color: #0055AA; cursor: pointer; display: block; height: 22px; line-height: 22px; min-height: 22px; overflow: hidden; padding: 1px 9px 0; text-align: left; text-decoration: none; }.c_address_list a.hover,.c_address_list a:hover { background: none repeat scroll 0 0 #E8F4FF; border-bottom: 1px solid #7F9DB9; border-top: 1px solid #7F9DB9; }.address_selected { background: none repeat scroll 0 0 #FFE6A6; color: #FFFFFF; height: 22px; }.c_address_pagebreak { line-height: 25px; margin: 0; padding: 0; text-align: center; }.c_address_pagebreak a { color: #0055AA; display: inline-block; font-family: Arial, Simsun, sans-serif; font-size: 14px; margin: 0; padding: 0 4px; text-align: center; text-decoration: underline; width: 15px; }a.address_current { color: #000; text-decoration: none; }.c_address_select .ico_key, .c_address_select .ico_unkey{position: absolute;top: 1px;left: 1px;width: 34px;height: 24px;overflow: hidden;line-height: 999em;font-size: 0;content: "";background: url(http://pic.c-ctrip.com/ctripOnPad/ico_key.png) no-repeat 0 0;-webkit-transform: scale(.7);}.c_address_select .address_close {position: absolute;top: 3px;right: 4px;width: 18px;height: 19px;overflow: hidden;line-height: 999em;font-size: 0;content: "";text-indent: 99em;background: url(http://pic.c-ctrip.com/ctripOnPad/pad_address_icon.png) no-repeat -32px 0;-webkit-transform: scale(0.5);}.c_address_select .ico_unkey {background: url(http://pic.c-ctrip.com/ctripOnPad/ico_unkey.png) no-repeat 0 0;}',
          suggestionIpad: '\t\t\t\t<div class="city_select_lhsl">\t\t\t\t\t<p class="title"><a class="close CQ_suggestionClose" href="javascript:;">&times;</a></p><ul class="CQ_suggestionTabContainer">\t\t\t\t\t\t{{enum(key) $data.data}}\t\t\t\t\t\t\t<li class="CQ_suggestionTab"><span>${key}</span></li>\t\t\t\t\t\t{{/enum}}\t\t\t\t\t</ul>\t\t\t\t\t{{enum(key,arr) $data.data}}\t\t\t\t\t\t<div class="city_item CQ_suggestionPanel">\t\t\t\t\t\t\t{{each(i,item) arr}}\t\t\t\t\t\t\t\t<a data="${item.data}" href="javascript:void(0);">${item.display}</a>\t\t\t\t\t\t\t{{/each}}\t\t\t\t\t\t</div>\t\t\t\t\t{{/enum}}\t\t\t\t</div>\t\t\t'

        }
      });
    }
  }

  if (cQuery('#J_national')) {
    National.regNationalAddr()
  }
  National.idCartChange()
});