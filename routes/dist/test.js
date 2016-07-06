/*! date */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _BookingTips = __webpack_require__(1);

	var _BookingTips2 = _interopRequireDefault(_BookingTips);

	var _CanBookCheck = __webpack_require__(2);

	var _CanBookCheck2 = _interopRequireDefault(_CanBookCheck);

	var _CheckOrderIsDuplicated = __webpack_require__(3);

	var _CheckOrderIsDuplicated2 = _interopRequireDefault(_CheckOrderIsDuplicated);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe("预订须知测试", function () {
	    it("不显示checkbox", function () {
	        expect(_BookingTips2.default.data.IsShowCheckBox).toEqual(false);
	    });
	});

	describe("可定检查接口", function () {
	    it("可定检查不通过", function () {
	        expect(_CanBookCheck2.default.errno).not.toEqual(0);
	    });

	});


	describe("检查重复订单接口", function () {
	    it("订单有重复", function () {
	        expect(_CheckOrderIsDuplicated2.default.errno).toEqual(1);
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  "errmsg": "OK",
	  "errno": 0,
	  "data": {
	    "Contract": null,
	    "IsShowCheckBox": false,
	    "ProductNotice": [{
	      "ProductAddInfoID": 0,
	      "AddInfoTitleName": "预订须知",
	      "AddInfoSubTitleName": "预订限制",
	      "IsRegOrder": true,
	      "IsShowAtReserve": true,
	      "SortNum": 0,
	      "Timestamp": "0001-01-01T00:00:00",
	      "ProductAddInfoDetails": []
	    }, {
	      "ProductAddInfoID": 0,
	      "AddInfoTitleName": "预订须知",
	      "AddInfoSubTitleName": "出行须知",
	      "IsRegOrder": false,
	      "IsShowAtReserve": true,
	      "SortNum": 4,
	      "Timestamp": "0001-01-01T00:00:00",
	      "ProductAddInfoDetails": [{
	        "DisplayNum": 0,
	        "DescDetail": "为普及旅游安全知识及旅游文明公约，使您的旅程顺利圆满完成，特制定<a href=\" http://pages.ctrip.com/tour/pdf3/20130930.pdf\" target=\"_blank\">《携程旅游告游客注意事项》</a>，请您认真阅读并切实遵守；",
	        "EffectDate": "1900-01-01T00:00:00",
	        "ExpireDate": "2063-12-31T00:00:00",
	        "IsHighlight": false,
	        "SortNum": 1,
	        "Url": null,
	        "DepartureCityIDs": []
	      }, {
	        "DisplayNum": 0,
	        "DescDetail": "根据中国海关总署颁布的2010年54号令，进境公民旅客携带在境外获取的个人自用进境物品总值在5000元以内（含5000元）的，海关予以免税放行。烟草制品、酒精制品、照相机、摄像机等20种商品不在免税范围内，敬请知晓。详情请<A href=\"http://www.customs.gov.cn/publish/portal0/tab3889/module1188/info236878.htm\" target=_blank>点击</A>。 ",
	        "EffectDate": "1900-01-01T00:00:00",
	        "ExpireDate": "2057-12-31T00:00:00",
	        "IsHighlight": false,
	        "SortNum": 22,
	        "Url": null,
	        "DepartureCityIDs": []
	      }, {
	        "DisplayNum": 0,
	        "DescDetail": "根据最新发布的《中华人民共和国禁止携带、邮寄进境的动植物及其产品和其他检疫物名录》，将燕窝、新鲜水果、蔬菜、动物源性中药材、转基因生物材料等列入严禁携带或邮寄进境项目，敬请知晓。更多信息，<A href=\"http://dzwjyjgs.aqsiq.gov.cn/rdgz/201202/t20120223_209369.htm\" target=_blank>请点击</A>。 ",
	        "EffectDate": "1900-01-01T00:00:00",
	        "ExpireDate": "2050-12-31T00:00:00",
	        "IsHighlight": false,
	        "SortNum": 22,
	        "Url": null,
	        "DepartureCityIDs": []
	      }]
	    }],
	    "AdditionalProductNotice": [{
	      "InsuranceTermsUrl": "http://pages.ctrip.com/tour/pdf1/120214.pdf",
	      "ResourceID": 3029273,
	      "Addinfo": [{
	        "ProductAddInfoID": 0,
	        "AddInfoTitleName": "预订须知",
	        "AddInfoSubTitleName": "平安携程境外马尔代夫专属保险",
	        "IsRegOrder": true,
	        "IsShowAtReserve": false,
	        "SortNum": 0,
	        "Timestamp": "0001-01-01T00:00:00",
	        "ProductAddInfoDetails": [{
	          "DisplayNum": 0,
	          "DescDetail": "90周岁以上不承保。",
	          "EffectDate": "2012-01-01T00:00:00",
	          "ExpireDate": "2017-01-01T00:00:00",
	          "IsHighlight": false,
	          "SortNum": 1,
	          "Url": null,
	          "DepartureCityIDs": []
	        }, {
	          "DisplayNum": 0,
	          "DescDetail": "71至80周岁的被保险人，其“意外身故、残疾保障”和“双倍给付意外伤害”的保险金额为保单所载金额的一半，81至90周岁的被保险人，其“意外身故、残疾保障”和“双倍给付意外伤害”的保险金额为保单所载金额的四分之一。每人每次限购1份。",
	          "EffectDate": "2011-01-01T00:00:00",
	          "ExpireDate": "2017-01-01T00:00:00",
	          "IsHighlight": false,
	          "SortNum": 2,
	          "Url": null,
	          "DepartureCityIDs": []
	        }, {
	          "DisplayNum": 0,
	          "DescDetail": "按中国保监会规定，除航空意外死亡及重大自然灾害意外死亡外，任何不满10周岁的被保险人，其死亡保险金额不得超过人民币20万元；已满10周岁但未满18周岁的被保险人，其死亡保险金额不得超过50万元。",
	          "EffectDate": "2011-01-01T00:00:00",
	          "ExpireDate": "2017-01-01T00:00:00",
	          "IsHighlight": false,
	          "SortNum": 3,
	          "Url": null,
	          "DepartureCityIDs": []
	        }, {
	          "DisplayNum": 0,
	          "DescDetail": "投保人为被保险人投保须征得被保险人同意，被保险人为未成年人的，须征得其监护人同意。",
	          "EffectDate": "2011-01-01T00:00:00",
	          "ExpireDate": "2017-01-01T00:00:00",
	          "IsHighlight": false,
	          "SortNum": 4,
	          "Url": null,
	          "DepartureCityIDs": []
	        }, {
	          "DisplayNum": 0,
	          "DescDetail": "保险生效日期是根据您选择的行程日期确定的，如您的行程有任何变化，请及时与我们的订单中心进行联系和修改。",
	          "EffectDate": "2011-01-01T00:00:00",
	          "ExpireDate": "2017-01-01T00:00:00",
	          "IsHighlight": false,
	          "SortNum": 5,
	          "Url": null,
	          "DepartureCityIDs": []
	        }, {
	          "DisplayNum": 0,
	          "DescDetail": "为确保投保无误，请准确填写个人信息。",
	          "EffectDate": "2011-01-01T00:00:00",
	          "ExpireDate": "2017-01-01T00:00:00",
	          "IsHighlight": false,
	          "SortNum": 6,
	          "Url": null,
	          "DepartureCityIDs": []
	        }, {
	          "DisplayNum": 0,
	          "DescDetail": "如需退订保险，请在保单生效前（出行前一天）联系携程预订员办理；保单生效后则无法退保。",
	          "EffectDate": "2014-02-01T00:00:00",
	          "ExpireDate": "2017-01-01T00:00:00",
	          "IsHighlight": false,
	          "SortNum": 7,
	          "Url": null,
	          "DepartureCityIDs": []
	        }]
	      }]
	    }],
	    "HotelNotice": [{
	      "ProductAddInfoID": 0,
	      "AddInfoTitleName": null,
	      "AddInfoSubTitleName": "Centara Grand Island Resort & Spa Maldives (马尔代夫盛泰澜中央格兰德岛)",
	      "IsRegOrder": false,
	      "IsShowAtReserve": false,
	      "SortNum": 0,
	      "Timestamp": "0001-01-01T00:00:00",
	      "ProductAddInfoDetails": [{
	        "DisplayNum": 0,
	        "DescDetail": "[2013-1-1至2020-12-31]所有出行人的全程餐食须一致。",
	        "EffectDate": "0001-01-01T00:00:00",
	        "ExpireDate": "0001-01-01T00:00:00",
	        "IsHighlight": false,
	        "SortNum": 0,
	        "Url": null,
	        "DepartureCityIDs": null
	      }, {
	        "DisplayNum": 0,
	        "DescDetail": "[2015-5-18至2020-12-31]全包套餐包含：欢迎毛巾和饮料、在Reef餐厅的早餐、在Azzuri Mare或Lotus餐厅的午餐、在Reef或Lotus或Azzuri Mare餐厅的晚餐、下午茶、The Sundowner聚会、酒吧提供的红酒/啤酒/鸡尾酒/软饮/茶/咖啡/果汁（上午10点至午夜）、出海浮潜、鲸鲨寻踪、日落巡航、居民岛游览、夕阳海钓，每种活动各1次、免费使用健身房/浮潜装备、所有非机动类和无装备类的水上运动、潜水体验套餐，每周客户可以享受三次潜水活动（包括一次 适应课程，2次海底潜水）--此活动后续可抵扣SPA券使用。全包套餐所包含的餐食是您入住后的第一顿晚餐到您退房前的早餐，如果第一晚由于航班晚到原因而没有享受到晚餐的，请在到达酒店办理入住时告知酒店需调整此晚餐享用时间，能否调整以酒店回复为准。",
	        "EffectDate": "0001-01-01T00:00:00",
	        "ExpireDate": "0001-01-01T00:00:00",
	        "IsHighlight": false,
	        "SortNum": 0,
	        "Url": null,
	        "DepartureCityIDs": null
	      }, {
	        "DisplayNum": 0,
	        "DescDetail": "[2015-7-2至2017-4-16]此期间入住日落海洋泳池别墅，所有客人可免费享受俱乐部礼遇：1）可以使用俱乐部私人泳池休闲区域和岛屿俱乐部的一日三餐，2）在俱乐部办理入住登记，3）上午10点水果和糕点，下午茶及餐前小点，4）酒吧每天早上10点到晚上11点都酒水和饮料。5）礼宾服务，6）泳池河畔提供凉毛巾和水果拼盘。7）免费图书和DVD的租借，每日的国际杂志和报纸。8）每天有两件衣物可以免费的清洗。9）每天夜床服务，具体以酒店安排为准。",
	        "EffectDate": "0001-01-01T00:00:00",
	        "ExpireDate": "0001-01-01T00:00:00",
	        "IsHighlight": false,
	        "SortNum": 0,
	        "Url": null,
	        "DepartureCityIDs": null
	      }, {
	        "DisplayNum": 0,
	        "DescDetail": "[2015-12-29至2020-12-31]所有出行人餐食及接送机必须一致，且房费中仅包含2人费用。 如有第三人及以上出行，需按相应人数及入住晚数选择第三人附加费。",
	        "EffectDate": "0001-01-01T00:00:00",
	        "ExpireDate": "0001-01-01T00:00:00",
	        "IsHighlight": false,
	        "SortNum": 0,
	        "Url": null,
	        "DepartureCityIDs": null
	      }]
	    }],
	    "FlightNotice": ["您选择了明折明扣机票，因网上数据更新有一定的延时，您所选定的航班、舱位和价格以操作人员回复为准。我们会尽快与您确认。"],
	    "TrafficNotice": [],
	    "OverSeaTravelNotice": "旅游者报名参加出境旅游，应当自行确保已持有目的地国家/地区的有效签证/签注，并应与目的地国家使（领）馆或有关机关确认所执签证/签注符合出入境条件，如因签证事宜造成未能出行的相关损失应由旅游者承担。"
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  "errmsg": "可定检查不通过",
	  "errno": -1,
	  "data": {
	    "data": [{
	      "Type": 302,
	      "FailCode": 304,
	      "ResourceName": "上海-首尔 MU5061|上海-首尔 MU5061",
	      "ResourceType": "flight",
	      "Token": "01H4sIAAAAAAAEAOy9B2AcSZYlJi9tynt/SvVK1+B0oQiAYBMk2JBAEOzBiM3mkuwdaUcjKasqgcplVmVdZhZAzO2dvPfee++999577733ujudTif33/8/XGZkAWz2zkrayZ4hgKrIHz9+fB8/In7xRy+qjx7tjj46m3306KOTy4MnJ8enrz+5OP29vlv+1PkXb46vXrz5avfLN2/fffmTD9988Xs371789PHeF0/nb16fPnvz6qt3D3/vnWdfvPn2u4Pzb1/Rd9PdL376Gf3+7uAny4N3Xzw93qX373/55vT+7737xbv8B6f07u9z9eWzF2c/8ZMvnr359u75T3z17gu0P396uvfiB19df/Hq+PPP3/4+v9eTt7s/+eIN9fXq7OlXO/Mnn1+8oP6uimfvzp6eXjx78/nF72P6Ozv+ybPPv3jz+9x78ebs3dn87dnx/IY2F29fP7kqrooHX/3k58cXxcnVxcnpxfTs4js//XufzC/Ofq+fXn1n9vlPtt/9geL0eofG8HZN47n64mRn/8uT/Sv8/vzN9N7znz7G7+0Xb07fye9PZl/94NmDNz/51S6N9d3zn3zx8GR9/PTk+Oz13tUXv9f18bPveLR490VJdAA9fu/d8y92np3+5NPvPH19+oppmO++qH6f3/s75U89e9L8Pr/3q8Xk3nfa50+Pmy9OrprnT588zHd+6gXRaPeL4urd82dvmzf0+Zuf/MmH+Q/OfvDFm59ovvjB77Pz/PTF7/Pqq+8cvHq7e/DFt3cfvHn78PX57435evdzj8er47PPm+rJycVPff7mzVfEa2eviWOevXlS8ZyflW9fH787e0J/f+fFm7f3XzylNj89vfqJ4xXN53ee/qzh9fo7E8zXz03fZ89OL744a14dFE+YL784ezj/iV/0fLd9k33+7PqnvvvqJyafP9v5qcXD68nrHcjmDuTkxQ+YB3dfXO+8+/Lpd5gHX73dIR786vo5yelHo4+evagakvKPfsn/EwAA//+N0W709gMAAA==",
	      "SubToken": null
	    }, {
	      "Type": 302,
	      "FailCode": 304,
	      "ResourceName": "首尔-上海 FM5052|首尔-上海 FM5052",
	      "ResourceType": "flight",
	      "Token": "01H4sIAAAAAAAEAOy9B2AcSZYlJi9tynt/SvVK1+B0oQiAYBMk2JBAEOzBiM3mkuwdaUcjKasqgcplVmVdZhZAzO2dvPfee++999577733ujudTif33/8/XGZkAWz2zkrayZ4hgKrIHz9+fB8/In7xRy+qjx7tjT46m3306KOTy4MnJ8enrz+5OP29vlv+1PkXb46vXrz5avfLN2/fffmTD9988Xs371789PHeF0/nb16fPnvz6qt3D3/vnWdfvPn2u4Pzb1/Rd9PdL376Gf3+7uAny4N3Xzw93qX373/55vT+7737xbv8B6f07u9z9eWzF2c/8ZMvnr359u75T3z17gu0P396uvfiB19df/Hq+PPP3/4+v9eTt7s/+eIN9fXq7OlXO/Mnn1+8oP6uimfvzp6eXjx78/nF72P6Ozv+ybPPv3jz+9x78ebs3dn87dnx/IY2F29fP7kqrooHX/3k58cXxcnVxcnpxfTs4js//XufzC/Ofq+fXn1n9vlPtt/9geL0eofG8HZN47n64mRn/8uT/Sv8/vzN9N7znz7G7+0Xb07fye9PZl/94NmDNz/51S6N9d3zn3zx8GR9/PTk+Oz13tUXv9f18bPveLR490VJdAA9fu/d8y92np3+5NPvPH19+oppmO++qH6f3/s75U89e9L8Pr/3q8Xk3nfa50+Pmy9OrprnT588zHd+6gXRaPeL4urd82dvmzf0+Zuf/MmH+Q/OfvDFm59ovvjB77Pz/PTF7/Pqq+8cvHq7e/DFt3cfvHn78PX57435evdzj8er47PPm+rJycVPff7mzVfEa2eviWOevXlS8ZyflW9fH787e0J/f+fFm7f3XzylNj89vfqJ4xXN53ee/qzh9fo7E8zXz03fZ89OL744a14dFE+YL784ezj/iV/0fLd9k33+7PqnvvvqJyafP9v5qcXD68nrHcjmDuTkxQ+YB3dfXO+8+/Lpd5gHX73dIR786vo5yelHo4+evagakvKPfsn/EwAA///zTzJG9gMAAA==",
	      "SubToken": null
	    }],
	    "posttoFreetravel": "<form id=\"posttofreetravel\" name=\"ctripfreetravelForm\" method=\"POST\" action=\"http://taocan.fat30.qa.nt.ctripcorp.com/freetravel/p1005559919s2.html?shoppingid=545da5b0adea4b339eaca6e2fe4ac3de\"\n                                                target=\"_self\" accept-charset=\"utf-8\" onsubmit=\"document.charset='utf-8';\"> \n                                                <input id=\"ShoppingId\" name=\"ShoppingId\" type=\"hidden\" value=\"545da5b0adea4b339eaca6e2fe4ac3de\" />           \n                                                 <input id =\"checkFailsJson\" name=\"checkFailsJson\" type=\"hidden\" value='{\"Errno\":-1,\"IsSuccess\":false,\"ErrorInfo\":\"可定检查不通过\",\"CheckFails\":[{\"Type\":302,\"FailCode\":304,\"ResourceName\":\"上海-首尔 MU5061|上海-首尔 MU5061\",\"ResourceType\":\"flight\",\"Token\":\"01H4sIAAAAAAAEAOy9B2AcSZYlJi9tynt/SvVK1+B0oQiAYBMk2JBAEOzBiM3mkuwdaUcjKasqgcplVmVdZhZAzO2dvPfee++999577733ujudTif33/8/XGZkAWz2zkrayZ4hgKrIHz9+fB8/In7xRy+qjx7tjj46m3306KOTy4MnJ8enrz+5OP29vlv+1PkXb46vXrz5avfLN2/fffmTD9988Xs371789PHeF0/nb16fPnvz6qt3D3/vnWdfvPn2u4Pzb1/Rd9PdL376Gf3+7uAny4N3Xzw93qX373/55vT+7737xbv8B6f07u9z9eWzF2c/8ZMvnr359u75T3z17gu0P396uvfiB19df/Hq+PPP3/4+v9eTt7s/+eIN9fXq7OlXO/Mnn1+8oP6uimfvzp6eXjx78/nF72P6Ozv+ybPPv3jz+9x78ebs3dn87dnx/IY2F29fP7kqrooHX/3k58cXxcnVxcnpxfTs4js//XufzC/Ofq+fXn1n9vlPtt/9geL0eofG8HZN47n64mRn/8uT/Sv8/vzN9N7znz7G7+0Xb07fye9PZl/94NmDNz/51S6N9d3zn3zx8GR9/PTk+Oz13tUXv9f18bPveLR490VJdAA9fu/d8y92np3+5NPvPH19+oppmO++qH6f3/s75U89e9L8Pr/3q8Xk3nfa50+Pmy9OrprnT588zHd+6gXRaPeL4urd82dvmzf0+Zuf/MmH+Q/OfvDFm59ovvjB77Pz/PTF7/Pqq+8cvHq7e/DFt3cfvHn78PX57435evdzj8er47PPm+rJycVPff7mzVfEa2eviWOevXlS8ZyflW9fH787e0J/f+fFm7f3XzylNj89vfqJ4xXN53ee/qzh9fo7E8zXz03fZ89OL744a14dFE+YL784ezj/iV/0fLd9k33+7PqnvvvqJyafP9v5qcXD68nrHcjmDuTkxQ+YB3dfXO+8+/Lpd5gHX73dIR786vo5yelHo4+evagakvKPfsn/EwAA//+N0W709gMAAA==\",\"SubToken\":null},{\"Type\":302,\"FailCode\":304,\"ResourceName\":\"首尔-上海 FM5052|首尔-上海 FM5052\",\"ResourceType\":\"flight\",\"Token\":\"01H4sIAAAAAAAEAOy9B2AcSZYlJi9tynt/SvVK1+B0oQiAYBMk2JBAEOzBiM3mkuwdaUcjKasqgcplVmVdZhZAzO2dvPfee++999577733ujudTif33/8/XGZkAWz2zkrayZ4hgKrIHz9+fB8/In7xRy+qjx7tjT46m3306KOTy4MnJ8enrz+5OP29vlv+1PkXb46vXrz5avfLN2/fffmTD9988Xs371789PHeF0/nb16fPnvz6qt3D3/vnWdfvPn2u4Pzb1/Rd9PdL376Gf3+7uAny4N3Xzw93qX373/55vT+7737xbv8B6f07u9z9eWzF2c/8ZMvnr359u75T3z17gu0P396uvfiB19df/Hq+PPP3/4+v9eTt7s/+eIN9fXq7OlXO/Mnn1+8oP6uimfvzp6eXjx78/nF72P6Ozv+ybPPv3jz+9x78ebs3dn87dnx/IY2F29fP7kqrooHX/3k58cXxcnVxcnpxfTs4js//XufzC/Ofq+fXn1n9vlPtt/9geL0eofG8HZN47n64mRn/8uT/Sv8/vzN9N7znz7G7+0Xb07fye9PZl/94NmDNz/51S6N9d3zn3zx8GR9/PTk+Oz13tUXv9f18bPveLR490VJdAA9fu/d8y92np3+5NPvPH19+oppmO++qH6f3/s75U89e9L8Pr/3q8Xk3nfa50+Pmy9OrprnT588zHd+6gXRaPeL4urd82dvmzf0+Zuf/MmH+Q/OfvDFm59ovvjB77Pz/PTF7/Pqq+8cvHq7e/DFt3cfvHn78PX57435evdzj8er47PPm+rJycVPff7mzVfEa2eviWOevXlS8ZyflW9fH787e0J/f+fFm7f3XzylNj89vfqJ4xXN53ee/qzh9fo7E8zXz03fZ89OL744a14dFE+YL784ezj/iV/0fLd9k33+7PqnvvvqJyafP9v5qcXD68nrHcjmDuTkxQ+YB3dfXO+8+/Lpd5gHX73dIR786vo5yelHo4+evagakvKPfsn/EwAA///zTzJG9gMAAA==\",\"SubToken\":null}]}'/>\n                                               </form>"
	  }
	};

	// module.exports = {
	//     "errmsg": "可定检查不通过",
	//     "errno": -1,
	//     "data": {
	//       "data": [{
	//         "Type": 102,
	//         "FailCode": 102,
	//         "ResourceName": "",
	//         "ResourceType": "x",
	//         "Token": "03XS-4108876-22-73",
	//         "SubToken": null
	//       }, {
	//         "Type": 402,
	//         "FailCode": 402,
	//         "ResourceName": "",
	//         "ResourceType": "x",
	//         "Token": "03XO-5539815-18-73",
	//         "SubToken": null
	//       }],
	//       "posttoFreetravel": ""
	//     }}

	// module.exports = {
	//   "data": {
	//     "data": [{
	//       "Type": 202,
	//       "FailCode": 108,
	//       "ResourceName": "上海浦东文华东方酒店 |浦江逸景套房",
	//       "ResourceType": "hotel",
	//       "Token": "9e9106ba8b6e436eb291b496bcad54",
	//       "SubToken": "fesf9106ba8b6e436eb291b496bcadfae"
	//     }, {
	//       "Type": 202,
	//       "FailCode": 3333,
	//       "ResourceName": "HO345 航班",
	//       "ResourceType": "flight",
	//       "Token": "9e9106ba8b6e436eb291b496bcad54"
	//     }]
	//   },

	//   "errmsg": "可订检查失败",
	//   "errno": 1
	// }

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  "errmsg": "订单重复",
	  "errno": 1,
	  "data": {
	    "NumAdult": 2,
	    "NumChild": 0,
	    "OrderDate": "2016-05-30T16:16:50.457+08:00",
	    "TakeOffDate": "2016-07-31T00:00:00+08:00",
	    "OrderID": 2240070072,
	    "OrderPrice": 600.0000,
	    "OrderState": "已提交",
	    "PkgName": "首尔5日4晚自由行(2钻)·孙亮测试",
	    "DuplicatedOrderPageUrl": "http://vacations.fat30.qa.nt.ctripcorp.com/bookingNext/ordermanage/orderdetails?OrderID=2240070072"
	  }
	};

/***/ }
/******/ ]);