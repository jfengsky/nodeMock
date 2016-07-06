// 包含取消险的新保险
module.exports = {
  "data": {
    "GUID": "510a80ce-5b30-45df-892e-7d6cd6cd27dd",
    "SegmentDatas": [{
      "SegmentID": 482344,
      "SegmentNumber": 1,
      "DepartureDate": "2016-06-21T00:00:00",
      "ArriveDate": "2016-06-22T00:00:00",
      "CheckInDate": "2016-06-21T00:00:00",
      "CheckOutDate": "2016-06-22T00:00:00",
      "DepartureCityID": 2,
      "DepartureCityCode": "",
      "ArriveCityID": 58,
      "ArriveCityCode": "",
      "LodgingDays": 1
    }, {
      "SegmentID": 482371,
      "SegmentNumber": 2,
      "DepartureDate": "2016-06-22T00:00:00",
      "ArriveDate": "2016-06-22T00:00:00",
      "CheckInDate": "2016-06-22T00:00:00",
      "CheckOutDate": "2016-06-22T00:00:00",
      "DepartureCityID": 58,
      "DepartureCityCode": "",
      "ArriveCityID": 2,
      "ArriveCityCode": "",
      "LodgingDays": 0
    }],
    "BaseInfo": {
      "ProductID": 4145151,
      "DepartureDate": "2016-06-21T00:00:00",
      "AdultNum": 2,
      "ChildNum": 0,
      "PriceAdult": 20198.0000,
      "PriceChild": 0.0,
      "TotalPrice": 20258.0,
      "AdditionalPrice": 0.0,
      "PreferentialPrice": 0.0,
      "AdultsPriceAdjust": 200.0000,
      "ChildsPriceAdjust": 0.0,
      "InsurancePrice": 60.0000,
      "VendorInfo": null
    },
    "FlightInfos": null,
    "HotelInfos": [],
    "CruiseCabinInfo": null,
    "SingleResources": [{
      "SegmentID": 482344,
      "SegmentNumber": 1,
      "ResourceID": 5559569,
      "CategoryID": 22,
      "CategoryName": "行程",
      "Name": "2日游套餐",
      "Price": 19998.0000,
      "MarketPrice": 0.0,
      "Introduction": "",
      "Unit": null,
      "TotalCount": 1,
      "AddInfos": null,
      "ResPriceInventorys": [{
        "ProductID": 5559569,
        "UseDate": "2016-06-21T00:00:00",
        "AdultMarketPrice": 0.0,
        "AdultPrice": 9999.0000,
        "AdultQuantity": 2,
        "AdultAvailable": 100,
        "ChildMarketPrice": 0.0,
        "ChildPrice": 8888.0000,
        "ChildQuantity": 0,
        "ChildAvailable": 100
      }]
    }],
    "OptionResources": [{
      "ResourceID": 5559570,
      "CategoryID": 30,
      "CategoryName": "单房差",
      "Name": "单房差",
      "Inventory": [{
        "Price": 7777.0000,
        "MinQuantity": 0,
        "MaxQuantity": 2,
        "DefaultQuantity": 0,
        "Date": "2016-06-21T00:00:00",
        "AvailableQuantity": 99999,
        "MarketPrice": 0.0,
        "StepQuantity": 1
      }],
      "Introduction": "",
      "AddInfos": null,
      "Unit": "人",
      "TotalCount": 1,
      "IsDefaultChoose": true,
      "SeqNum": 0,
      "IsChooseRequired": false,
      "IsChooseDate": false,
      "IsDisplay": true,
      "ResourceRelations": [{
        "ReourceRelationID": 5559569,
        "ResourceRelationType": 4
      }],
      "InsuranceTiming": 0,
      "AdvanceBookingDays": 2,
      "IsHighRisk": false,
      "MaxDays": 99,
      "SpellRoomInfos": null
    }],
    "ChosedResourceRequest": {
      "ChosedSingleResourceList": [{
        "SegmentNumber": 1,
        "SegmentID": 1,
        "ProductID": 5559569,
        "DepartureDate": "2016-06-21T00:00:00",
        "AdultQuantity": 2,
        "ChildQuantity": 0
      }],
      "ChosedOptionResourceList": [{
        "ProductID": 5559570,
        "DepartureDate": "2016-06-21T00:00:00",
        "AdultQuantity": 2,
        "ChildQuantity": 0,
        "UseDate": "2016-06-21T00:00:00",
        "UseCopies": 0
      }],
      "ChosedFlightResource": null,
      "ChosedHotelResourceList": null,
      "ChosedCategoryCabinRoom": null,
      "ChosedInsurances": [{
        "ProductID": 2425,
        "DepartureDate": "2016-06-21T00:00:00",
        "ReturnDate": "2016-06-22T00:00:00",
        "AdultQuantity": 2,
        "ChildQuantity": 0,
        "AdultAges": [26, 26],
        "ChildAges": [],
        "UseCopies": 2,
        "AdditionalInsurances": [{
          "ProductID": 2419,
          "UseCopies": 0
        }]
      }, {
        "ProductID": 2404,
        "DepartureDate": "2016-06-21T00:00:00",
        "ReturnDate": "2016-06-22T00:00:00",
        "AdultQuantity": 2,
        "ChildQuantity": 0,
        "AdultAges": [26, 26],
        "ChildAges": [],
        "UseCopies": 2,
        "AdditionalInsurances": [{
          "ProductID": 2406,
          "UseCopies": 2
        }, {
          "ProductID": 2376,
          "UseCopies": 0
        }, {
          "ProductID": 2416,
          "UseCopies": 0
        }]
      }, {
        "ProductID": 2480,
        "DepartureDate": "2016-06-21T00:00:00",
        "ReturnDate": "2016-06-22T00:00:00",
        "AdultQuantity": 2,
        "ChildQuantity": 0,
        "AdultAges": [26, 26],
        "ChildAges": [],
        "UseCopies": 0,
        "AdditionalInsurances": null
      }, {
        "ProductID": 2426,
        "DepartureDate": "2016-06-21T00:00:00",
        "ReturnDate": "2016-06-22T00:00:00",
        "AdultQuantity": 2,
        "ChildQuantity": 0,
        "AdultAges": [26, 26],
        "ChildAges": [],
        "UseCopies": 0,
        "AdditionalInsurances": null
      }]
    },
    "ExtendData": {
      "FlightTotalPriceDiff": 0.0,
      "FlightTotalPrice": 0.0,
      "ChildPriceChangedSegmentNos": null
    },
    "SpellRoomInfo": null,
    "InsuranceResources": [{
      "Sort": 0,
      "Type": 3,
      "AdultQuantity": 2,
      "ChildQuantity": 0,
      "IsDisplay": true,
      "IsPanelDisplay": true,
      "RetailInsurancePrompt":"",
      "MainInsuranceResource": {
        "ProductId": 2425,
        "Name": "华泰境外短线滑雪保险 团队游接入保险项目主险2425（崔巍专用）",
        "Sort": 0,
        "Type": 3,
        "Unit": "份",
        "UseCopies": 2,
        "TotalPrice": 22.0000,
        "ChildPrice": 3.3000,
        "AdultPrice": 11.0000,
        "UseDate": "2016-06-21T00:00:00",
        "Introduction": "<div><strong>保险项目和保险限额:</strong><table class='other_product_tb'><tbody><tr><td rowspan='4'><strong>旅程阻碍保障</strong></td><td>旅程延误</td><td>900元</td></tr><tr><td>行李延误</td><td>1,000元</td></tr><tr><td>旅行取消</td><td>5,000元</td></tr><tr><td>旅程阻碍</td><td>5,000元</td></tr><tr><td rowspan='3'><strong>个人财物保障</strong></td><td>个人钱财损失</td><td>1,000元</td></tr><tr><td>个人行李及随身物品</td><td>4,000元</td></tr><tr><td>旅行证件丢失</td><td>2,000元</td></tr><tr><td rowspan='6'><strong>个人意外伤害和医疗保障</strong></td><td>意外身故和伤残</td><td>300,000元</td></tr><tr><td> 交通工具意外身故、残疾</td><td>300,000元</td></tr><tr><td>医药补偿</td><td>200,000元</td></tr><tr><td>住院津贴</td><td>100元/天</td></tr><tr><td>自然灾害意外身故</td><td>300,000元</td></tr><tr><td>意外骨折保险金</td><td>5,000元</td></tr><tr><td rowspan='3'><strong>紧急救援</strong></td><td>医疗运送和送返</td><td>200,000元</td></tr><tr><td>身故遗体送返</td><td>200,000元</td></tr><tr><td>慰问探访费用补偿</td><td>12,000元</td></tr><tr><td><strong>个人责任</strong></td><td>个人责任</td><td>100,000元</td></tr></tbody></table></div><div><strong>详细信息请见 <a href='http://vacations.fat30.qa.nt.ctripcorp.com/insurance/product/2425' target='_blank'>“华泰境外短线滑雪保险 团队游接入保险项目主险2425（崔巍专用）”</a>，请仔细阅读<a href='' target='_blank'>“保险条款”</a>和其中的免除责任。<br/>特殊说明:</strong><p>1.本保险的投保年龄为0-90周岁。<br />2. 年龄在18周岁以下的被保险人，意外身故残疾及交通工具意外累计保险赔偿限额为人民币10万元（包括在所有商业保险公司所购买的保险）。<br />3. 75至90周岁的被保险人，其&ldquo;意外伤害（身故、残疾、烧烫伤）&rdquo;和&ldquo;公共交通工具飞机/火车/轮船/汽车意外伤害&rdquo;的保险金额为上述保险金额的一半。<br />4. 本保险不承保任何国家或国际组织认定的恐怖分子或恐怖组织成员，或非法从事毒品、核武器、生物或化学武器交易人员。<br />5. 投保人为被保险人投保须征得被保险人同意，被保险人为未成年人的须征得其监护人同意。<br />6. 同一被保险人限购一份，多投无效。<br />7. 由于该保险产品属于短期意外险，在保险起期之前可全额退保，但在起保后（行程开始后）则无法退保。 &nbsp;&nbsp; <br />8. 中国人寿财产保险股份有限公司客服及理赔报案电话 400 86 95519转8，境外救援电话010-5910 4999。<br />本页信息不构成保险合同一部分，详细信息请参见保险条款，并以其规定为准。</p></div>",
        "Inventory": [{
          "MinQuantity": 2,
          "MaxQuantity": 2,
          "DefaultQuantity": 2,
          "AvailableQuantity": 99999,
          "StepQuantity": 2
        }],
        "Category": 2
      },
      "AddtionalInsuranceResources": [{
        "ProductId": 2419,
        "Name": "崔巍测试附加险 团队游接入保险项目-附加险2419（崔巍专用）",
        "Sort": 0,
        "Type": 1,
        "Unit": "份",
        "UseCopies": 0,
        "TotalPrice": 0.0,
        "ChildPrice": 10.0000,
        "AdultPrice": 10.0000,
        "UseDate": "2016-06-21T00:00:00",
        "Introduction": "<div><strong>详细信息请见 <a href='http://vacations.fat30.qa.nt.ctripcorp.com/insurance/product/2419' target='_blank'>“崔巍测试附加险 团队游接入保险项目-附加险2419（崔巍专用）”</a>，请仔细阅读<a href='http://www.baidu.com' target='_blank'>“保险条款”</a>和其中的免除责任。<br/>特殊说明:</strong><p>这里是特比说明</p></div>",
        "Inventory": [{
          "MinQuantity": 0,
          "MaxQuantity": 2,
          "DefaultQuantity": 0,
          "AvailableQuantity": 99999,
          "StepQuantity": 2
        }],
        "Category": 2
      }]
    }, {
      "Sort": 0,
      "Type": 2,
      "AdultQuantity": 2,
      "ChildQuantity": 0,
      "IsDisplay": true,
      "IsPanelDisplay": true,
      "RetailInsurancePrompt":"保险提示话术测试2222",
      "MainInsuranceResource": {
        "ProductId": 2404,
        "Name": "华泰境外短线滑雪保险 团队游接入保险项目主险2404",
        "Sort": 0,
        "Type": 2,
        "Unit": "份",
        "UseCopies": 0,
        "TotalPrice": 24.0000,
        "ChildPrice": 3.0000,
        "AdultPrice": 12.0000,
        "UseDate": "2016-06-21T00:00:00",
        "Introduction": "<div><strong>保险项目和保险限额:</strong><table class='other_product_tb'><tbody><tr><td rowspan='4'><strong>旅程阻碍保障</strong></td><td>旅程延误</td><td>900元</td></tr><tr><td>行李延误</td><td>1,000元</td></tr><tr><td>旅行取消</td><td>5,000元</td></tr><tr><td>旅程阻碍</td><td>5,000元</td></tr><tr><td rowspan='3'><strong>个人财物保障</strong></td><td>个人钱财损失</td><td>1,000元</td></tr><tr><td>个人行李及随身物品</td><td>4,000元</td></tr><tr><td>旅行证件丢失</td><td>2,000元</td></tr><tr><td rowspan='6'><strong>个人意外伤害和医疗保障</strong></td><td>意外身故和伤残</td><td>300,000元</td></tr><tr><td> 交通工具意外身故、残疾</td><td>300,000元</td></tr><tr><td>医药补偿</td><td>200,000元</td></tr><tr><td>住院津贴</td><td>100元/天</td></tr><tr><td>自然灾害意外身故</td><td>300,000元</td></tr><tr><td>意外骨折保险金</td><td>5,000元</td></tr><tr><td rowspan='3'><strong>紧急救援</strong></td><td>医疗运送和送返</td><td>200,000元</td></tr><tr><td>身故遗体送返</td><td>200,000元</td></tr><tr><td>慰问探访费用补偿</td><td>12,000元</td></tr><tr><td><strong>个人责任</strong></td><td>个人责任</td><td>100,000元</td></tr></tbody></table></div><div><strong>详细信息请见 <a href='http://vacations.fat30.qa.nt.ctripcorp.com/insurance/product/2404' target='_blank'>“华泰境外短线滑雪保险 团队游接入保险项目主险2404”</a>，请仔细阅读<a href='http://pages.ctrip.com/tour/pdf1/120214a.pdf' target='_blank'>“保险条款”</a>和其中的免除责任。<br/>特殊说明:</strong><p>1、本计划的成年人投保年龄为18周岁至90周岁,未成年人的投保年龄为出生满30天至17周岁。71周岁至80周岁的被保险人，其&ldquo;意外身故和伤残&rdquo;保险金为上表所载金额的一半，保险费维持不变；81周岁至90周岁的被保险人，其&ldquo;意外身故和伤残&rdquo;保险金为上表所载金额的四分之一，保险费维持不变。</p>\n<p>2、18周岁以下的被保险人，&ldquo;意外身故及伤残保障&rdquo;的赔偿限额不超过中国保监会所规定的最高限额10万元人民币。投保人为被保险人投保须征得被保险人同意；被保险人为未成年人的须征得其监护人同意。</p>\n<p>3、本计划单次旅行的保障期限最长为45天，全年计划每次旅行的保障期限最长为30天。</p>\n<p>4、若遭遇不可抗力原因（恶劣天气、自然灾害或被保险人罹患疾病或遭受意外伤害而导致严重身体伤害），本计划的保障期间将自动延长，最多不超过10天。</p>\n<p>5、任何在下列期间发生的或由下列原因造成的保险事故，本公司不负任何赔偿责任：战争、军事行动、暴动或武装叛乱期间；侵略、外敌行为、敌对(不论是否宣战)、内战、叛乱、革命、起义、军事行动或篡权、受任何政府或国家权力机构的指挥对财产的没收或国有化或征用或毁坏或破坏的、暴乱骚乱；</p>\n<p>6、本保险不承保任何直接或间接由于前往或途经伊朗、叙利亚旅行期间发生的保险事故。</p>\n<p>7、本产品提供中英文互译保单，可满足使馆对英文保单的要求，电子保单请到订单中直接下载，彩色打印后可去使馆办理签证，方便快捷；根据签证的实际情况，建议您提前准备一份保单复印件给使馆备份。</p>\n<p>8、由于该保险产品属于短期意外险，在保险起期之前可全额退保，但在起保后（行程开始后）保险公司将不予受理退保申请。</p>\n<p>9、若您在旅游途中需要任何紧急援助，请直接拨打24小时紧急援助热线：+86 10 8468 5628。另外，您可致电95550转6转9或登陆保险公司官方网站www.axatp.com查询您保障的详细信息。</p>\n<p>10、保险产品销售服务方为：携程保险代理有限服务公司；公司网址：<a href=\"http://kefu.ctrip.com/insurance/index.aspx\">http://kefu.ctrip.com/insurance/index.aspx</a></p>\n<p>11、购买前请仔细阅读<a href=\"http://pages.ctrip.com/tour/pdf9/34.pdf\">投保人申明</a>，确认无误后购买。</p></div>",
        "Inventory": [{
          "MinQuantity": 0,
          "MaxQuantity": 2,
          "DefaultQuantity": 0,
          "AvailableQuantity": 99999,
          "StepQuantity": 2
        }],
        "Category": 1
      },
      "AddtionalInsuranceResources": [{
        "ProductId": 2406,
        "Name": "崔巍测试附加险 团队游接入保险项目-附加险2406",
        "Sort": 0,
        "Type": 2,
        "Unit": "份",
        "UseCopies": 0,
        "TotalPrice": 14.0000,
        "ChildPrice": 7.0000,
        "AdultPrice": 7.0000,
        "UseDate": "2016-06-21T00:00:00",
        "Introduction": "<div><strong>保险项目和保险限额:</strong><table class='other_product_tb'><tbody><tr><td rowspan='5'><strong>个人意外伤害和医疗保障</strong></td><td>意外身故和伤残</td><td>300,000RMB</td></tr><tr><td>突发急性病身故和残疾</td><td>80,000RMB</td></tr><tr><td>高风险运动意外伤害</td><td>80,000RMB</td></tr><tr><td>医药补偿</td><td>30,000RMB</td></tr><tr><td>住院津贴</td><td>150RMB/天，限额13,500RMB</td></tr></tbody></table></div><div><strong>详细信息请见 <a href='http://vacations.fat30.qa.nt.ctripcorp.com/insurance/product/2406' target='_blank'>“崔巍测试附加险 团队游接入保险项目-附加险2406”</a>，请仔细阅读<a href='http://pages.ctrip.com/tour/pdf5/245.pdf' target='_blank'>“保险条款”</a>和其中的免除责任。<br/>特殊说明:</strong><p>1、承保年龄0-90周岁，71至80周岁的被保险人，其\"意外身故、残疾保障\"的保险金额为保单所载金额的一半，81至90周岁的被保险人，其\"意外身故、残疾保障\"的保险金额为保单所载金额的四分之一。每人每次限购1份。<br />2、本保险保险期间为指定日内从被保险人进入景区开始到离开景区为止。<br />3、被保险人投保前已存在的疾病（含既往症、慢性病）属除外责任。&ldquo;投保前已存在的疾病&rdquo;是指在本合同生效之前已经确诊；或虽未经确诊但投保前两年内已接受过治疗，或投保前两年内经医生推荐接受治疗或医疗意见的疾病或症状。<br />4、18周岁以下的被保险人，意外死亡的赔偿限额不得超过中国保监会所规定的最高限额10万元人民币。<br />5、投保人为被保险人投保须征得被保险人同意；被保险人为未成年人的须征得其监护人同意。 <br />6、经许可该保险产品可在中国境内范围内销售，符合本保险产品购买条件的人均可购买。<br />7、由于该保险产品属于短期意外险，在保险生效当天之前可全额退保，但保险生效日开始后则无法退保。<br />8、承担被保险人乘坐景区外接送巴士时发生的保险事故责任，各项责任保险金额为保单所载金额的10%。景区外接送巴士须含在被保险人预定的景区套餐中，出险时提供景区巴士隶属证明和事故证明。<br />9、中国平安财产保险股份有限公司全国客服、报案电话为95511转5转8。<br />&nbsp;<br />更多详细信息请见&ldquo;<a href=\"http://vacations.ctrip.com/notes/2565.html\" target=\"_blank\">平安携程景区门票保险</a>&rdquo;说明，请仔细阅读&ldquo;<a href=\"http://pages.ctrip.com/tour/pdf5/245.pdf\" target=\"_blank\">保险条款</a>&rdquo;。<br />本页信息不构成保险合同一部分，详细信息请参见保险条款，并以其规定为准。</p></div>",
        "Inventory": [{
          "MinQuantity": 0,
          "MaxQuantity": 2,
          "DefaultQuantity": 0,
          "AvailableQuantity": 99999,
          "StepQuantity": 2
        }],
        "Category": 2
      }, {
        "ProductId": 2376,
        "Name": "崔巍测试附加险 团队游接入保险项目-售罄附加险",
        "Sort": 0,
        "Type": 1,
        "Unit": "份",
        "UseCopies": 0,
        "TotalPrice": 0.0,
        "ChildPrice": 10.0000,
        "AdultPrice": 10.0000,
        "UseDate": "2016-06-21T00:00:00",
        "Introduction": "<div><strong>保险项目和保险限额:</strong><table class='other_product_tb'><tbody><tr><td rowspan='3'><strong>个人意外伤害和医疗保障</strong></td><td>突发急性病身故和残疾</td><td>1000</td></tr><tr><td>医药补偿</td><td>2000</td></tr><tr><td>高原反应医疗</td><td>3000</td></tr></tbody></table></div><div><strong>详细信息请见 <a href='http://vacations.fat30.qa.nt.ctripcorp.com/insurance/product/2376' target='_blank'>“崔巍测试附加险 团队游接入保险项目-售罄附加险”</a>，请仔细阅读<a href='http://www.baidu.com' target='_blank'>“保险条款”</a>和其中的免除责任。<br/>特殊说明:</strong><p>1.本保险的投保年龄为0-90周岁。<br />2. 年龄在18周岁以下的被保险人，意外身故残疾及交通工具意外累计保险赔偿限额为人民币10万元（包括在所有商业保险公司所购买的保险）。<br />3. 75至90周岁的被保险人，其&ldquo;意外伤害（身故、残疾、烧烫伤）&rdquo;和&ldquo;公共交通工具飞机/火车/轮船/汽车意外伤害&rdquo;的保险金额为上述保险金额的一半。<br />4. 本保险不承保任何国家或国际组织认定的恐怖分子或恐怖组织成员，或非法从事毒品、核武器、生物或化学武器交易人员。<br />5. 投保人为被保险人投保须征得被保险人同意，被保险人为未成年人的须征得其监护人同意。<br />6. 同一被保险人限购一份，多投无效。<br />7. 由于该保险产品属于短期意外险，在保险起期之前可全额退保，但在起保后（行程开始后）则无法退保。 &nbsp;&nbsp; <br />8. 中国人寿财产保险股份有限公司客服及理赔报案电话 400 86 95519转8，境外救援电话010-5910 4999。<br />本页信息不构成保险合同一部分，详细信息请参见保险条款，并以其规定为准。</p></div>",
        "Inventory": [{
          "MinQuantity": 0,
          "MaxQuantity": 2,
          "DefaultQuantity": 0,
          "AvailableQuantity": 99999,
          "StepQuantity": 2
        }],
        "Category": 2
      }, {
        "ProductId": 2416,
        "Name": "崔巍测试附加险 团队游接入保险附加险2416(团队游渠道)",
        "Sort": 0,
        "Type": 1,
        "Unit": "份",
        "UseCopies": 0,
        "TotalPrice": 0.0,
        "ChildPrice": 10.0000,
        "AdultPrice": 10.0000,
        "UseDate": "2016-06-21T00:00:00",
        "Introduction": "<div><strong>保险项目和保险限额:</strong><table class='other_product_tb'><tbody><tr><td rowspan='2'><strong>个人意外伤害和医疗保障</strong></td><td>意外身故和伤残</td><td>100,000元</td></tr><tr><td>医药补偿</td><td>10,000元</td></tr><tr><td rowspan='3'><strong>其他保障</strong></td><td>儿童走失寻找费用补偿</td><td>50,000元</td></tr><tr><td>特需专家门诊预约服务</td><td>包含</td></tr><tr><td>电话医疗咨询服务</td><td>包含</td></tr></tbody></table></div><div><strong>详细信息请见 <a href='http://vacations.fat30.qa.nt.ctripcorp.com/insurance/product/2416' target='_blank'>“崔巍测试附加险 团队游接入保险附加险2416(团队游渠道)”</a>，请仔细阅读<a href='http://pages.ctrip.com/tour/pdf9/53.pdf' target='_blank'>“保险条款”</a>和其中的免除责任。<br/>特殊说明:</strong><p>1、本保险仅适用于出生满30天至17周岁的未成年人被保险人。</p>\n<p>2、投保人为被保险人的父母或法定监护人。</p>\n<p>3、该保险为一年期保险产品，在保险起期之前可全额退保。如在起保后需要退保，需书面通知保险公司。</p>\n<p>4、平安学生幼儿重大疾病保障项目，等待期30天，续保无等待期。&nbsp;</p>\n<p>5、少儿特需专家门诊预约服务，请点击查看提供专家门诊预约挂号服务的<a href=\"http://pages.ctrip.com/tour/pdf5/334.pdf\">《全国67家特需门诊医院》</a>，服务热线：4007-005-996。</p>\n<p>6、平安儿童走失寻找费用补偿保障，仅承担年龄在十二周岁（含）以下被保险人的保险责任，自公安机关立案之日起一年内，被保险人被寻回的，赔偿金额为走失天数乘每日赔偿津贴，其中每日赔偿津贴￥100；自立案之日起，被保险人持续下落不明超过一年的，保险人一次性赔偿找寻费用。</p>\n<p>7、申请理赔请查看<a href=\"http://pages.ctrip.com/tour/pdf5/332.pdf\">《平安携程少儿综合保险》理赔说明</a>并填写<a href=\"http://pages.ctrip.com/tour/word12/225.doc\">《理赔申请书》</a></p>\n<p>8、保单验证请登录平安保险官网查询，具体请见<a href=\"http://pages.ctrip.com/tour/wxtest/031.htm\">&ldquo;平安保单查询索引&rdquo;</a></p>\n<p>9、中国平安财产保险股份有限公司全国客服、报案电话为95511转5转8。</p>\n<p>10、每名被保险人限购本保险一份，多买无效。</p>\n<p>11、网上购买本产品提供电子保单查看、下载服务，电子保单是合法的合同表现形式，电子保单与纸质保单具有同等法律效力，请妥善保存。付款后，可到&ldquo;我的携程&rdquo;订单中查看或下载电子保单。</p>\n<p>12、保险产品销售服务方为：携程保险代理有限服务公司；公司网址：<a href=\"http://kefu.ctrip.com/insurance/index.aspx\">http://kefu.ctrip.com/insurance/index.aspx</a></p>\n<p><strong>本页信息不构成保险合同一部分，详细信息请参见保险条款，并以其规定为准。</strong></p></div>",
        "Inventory": [{
          "MinQuantity": 0,
          "MaxQuantity": 2,
          "DefaultQuantity": 0,
          "AvailableQuantity": 99999,
          "StepQuantity": 2
        }],
        "Category": 1
      }]
    }, {
      "Sort": 0,
      "Type": 1,
      "AdultQuantity": 2,
      "ChildQuantity": 0,
      "IsDisplay": false,
      "RetailInsurancePrompt":"保险提示话术测试3333",
      "IsPanelDisplay": true,
      "MainInsuranceResource": {
        "ProductId": 2480,
        "Name": "华泰无理由取消 标准款",
        "Sort": 0,
        "Type": 1,
        "Unit": "份",
        "UseCopies": 0,
        "TotalPrice": 0.0,
        "ChildPrice": 100.0000,
        "AdultPrice": 100.0000,
        "UseDate": "2016-06-21T00:00:00",
        "Introduction": "<div><strong>保险项目和保险限额:</strong><table class='other_product_tb'><tbody><tr><td><strong>旅程阻碍保障</strong></td><td>旅行取消</td><td>11</td></tr></tbody></table></div><div><strong>详细信息请见 <a href='http://vacations.fat30.qa.nt.ctripcorp.com/insurance/product/2480' target='_blank'>“华泰无理由取消 标准款”</a>，请仔细阅读<a href='http://pages.ctrip.com/tour/pdf4/184.pdf' target='_blank'>“保险条款”</a>和其中的免除责任。<br/>特殊说明:</strong><strong>此保险只能在下单时选择，一经售出，不支持退定。</strong><br /><strong>华泰报案与客服电话：40060 95509。</strong><br /><strong>在保险期间，被保险人成功预定携程度假行程并付款后，如取消预定造成被保险人预付款损失，被保险人将获得最高4,000 RMB的赔偿，其中因非自身原因导致的旅行取消，按旅行实际损失费用的100%赔偿，因自身原因导致的旅行取消，按旅行实际损失费用的80%赔偿。</strong><br />本产品仅承担本次旅行线路的全行程预订取消保障。保险生效时间为付款次日零时至旅行出发当天，旅行开始后，被保险人取消旅行的，不在保险责任范围内，最长承保期限180天。<br />（一）非自身原因取消<br />1、旅客身故、遭遇意外伤害事故导致严重受伤或罹患突发性重病，当地医院医生诊断不能或不宜继续原定行程；<br />2、旅客的直系亲属身故、遭遇意外伤害事故导致严重受伤或罹患突发性重病；<br />3、旅客或其配偶在投保前不知悉，但在在投保后被诊断出怀孕；<br />4、旅客或其配偶因妊娠并发症，且经当地医院医生诊断不宜继续原定行程；<br />5、旅客被劫持、绑架；<br />6、在出发首日之前7天内，旅客预订乘坐的公共交通工具承运人雇员突发罢工，无法继续原定行程；<br />7、在出发首日之前7天内，旅客的旅行出发地或目的地突发暴动、民间骚乱、流行疫病或大规模流行疫病，不宜继续原定行程；<br />8、在出发首日之前7天内，旅客的旅行出发地或目的地国家旅游局、外交部已发布了针对旅行目的地的相关警告，不宜继续原定行程；<br />9、在出发首日之前7天内，旅客的旅行出发地或目的地发生5级以上地震，无法继续原定行程；<br />10、在出发首日之前7天内，旅客的旅行出发地或目的地气象部门发布自然灾害预警信号，不宜继续原定行程；<br />11、在出发首日之前7天内，旅客因日常居住地的家庭财产遭受火灾、爆炸、自然灾害、室内管道破裂或被盗窃抢劫导致严重损失，不宜继续原定行程；<br />12、目的地居住场所发生恐怖袭击活动且同时满足下列条件：<br />(1)恐怖袭击活动发生地距离旅客酒店所在地在方圆150公里以内；<br />(2)恐怖袭击活动发生在旅客出发首日之日前30天内；<br />(3)旅行出发地或目的地政府已经对此类恐怖袭击活动发布过警告的。<br />（二）自身原因损失。<br />旅客由于家庭因素、公务需要或其他个人原因取消此次旅行。<br /><br />1、90周岁以上不承保。 <br />2、 投保人为被保险人本人；被保险人为未成年人的须征得其监护人同意。 　<br /><strong>本页信息不构成保险合同一部分，详细信息请参见保险条款，并以其规定为准。　</strong></div>",
        "Inventory": [{
          "MinQuantity": 0,
          "MaxQuantity": 2,
          "DefaultQuantity": 0,
          "AvailableQuantity": 99999,
          "StepQuantity": 2
        }],
        "Category": 2
      },
      "AddtionalInsuranceResources": null
    }, {
      "Sort": 0,
      "Type": 1,
      "AdultQuantity": 2,
      "ChildQuantity": 0,
      "IsDisplay": false,
      "IsPanelDisplay": true,
      "MainInsuranceResource": {
        "ProductId": 2426,
        "Name": "华泰境外短线滑雪保险 团队游接入保险项目主险2426（崔巍专用）",
        "Sort": 0,
        "Type": 1,
        "Unit": "份",
        "UseCopies": 0,
        "TotalPrice": 0.0,
        "ChildPrice": 3.3000,
        "AdultPrice": 11.0100,
        "UseDate": "2016-06-21T00:00:00",
        "Introduction": "<div><strong>保险项目和保险限额:</strong><table class='other_product_tb'><tbody><tr><td rowspan='4'><strong>旅程阻碍保障</strong></td><td>旅程延误</td><td>900元</td></tr><tr><td>行李延误</td><td>1,000元</td></tr><tr><td>旅行取消</td><td>5,000元</td></tr><tr><td>旅程阻碍</td><td>5,000元</td></tr><tr><td rowspan='3'><strong>个人财物保障</strong></td><td>个人钱财损失</td><td>1,000元</td></tr><tr><td>个人行李及随身物品</td><td>4,000元</td></tr><tr><td>旅行证件丢失</td><td>2,000元</td></tr><tr><td rowspan='6'><strong>个人意外伤害和医疗保障</strong></td><td>意外身故和伤残</td><td>300,000元</td></tr><tr><td> 交通工具意外身故、残疾</td><td>300,000元</td></tr><tr><td>医药补偿</td><td>200,000元</td></tr><tr><td>住院津贴</td><td>100元/天</td></tr><tr><td>自然灾害意外身故</td><td>300,000元</td></tr><tr><td>意外骨折保险金</td><td>5,000元</td></tr><tr><td rowspan='3'><strong>紧急救援</strong></td><td>医疗运送和送返</td><td>200,000元</td></tr><tr><td>身故遗体送返</td><td>200,000元</td></tr><tr><td>慰问探访费用补偿</td><td>12,000元</td></tr><tr><td><strong>个人责任</strong></td><td>个人责任</td><td>100,000元</td></tr></tbody></table></div><div><strong>详细信息请见 <a href='http://vacations.fat30.qa.nt.ctripcorp.com/insurance/product/2426' target='_blank'>“华泰境外短线滑雪保险 团队游接入保险项目主险2426（崔巍专用）”</a>，请仔细阅读<a href='' target='_blank'>“保险条款”</a>和其中的免除责任。<br/>特殊说明:</strong><p>1.本保险的投保年龄为0-90周岁。<br />2. 年龄在18周岁以下的被保险人，意外身故残疾及交通工具意外累计保险赔偿限额为人民币10万元（包括在所有商业保险公司所购买的保险）。<br />3. 75至90周岁的被保险人，其&ldquo;意外伤害（身故、残疾、烧烫伤）&rdquo;和&ldquo;公共交通工具飞机/火车/轮船/汽车意外伤害&rdquo;的保险金额为上述保险金额的一半。<br />4. 本保险不承保任何国家或国际组织认定的恐怖分子或恐怖组织成员，或非法从事毒品、核武器、生物或化学武器交易人员。<br />5. 投保人为被保险人投保须征得被保险人同意，被保险人为未成年人的须征得其监护人同意。<br />6. 同一被保险人限购一份，多投无效。<br />7. 由于该保险产品属于短期意外险，在保险起期之前可全额退保，但在起保后（行程开始后）则无法退保。 &nbsp;&nbsp; <br />8. 中国人寿财产保险股份有限公司客服及理赔报案电话 400 86 95519转8，境外救援电话010-5910 4999。<br />本页信息不构成保险合同一部分，详细信息请参见保险条款，并以其规定为准。</p></div>",
        "Inventory": [{
          "MinQuantity": 0,
          "MaxQuantity": 2,
          "DefaultQuantity": 0,
          "AvailableQuantity": 99999,
          "StepQuantity": 2
        }],
        "Category": 1
      },
      "AddtionalInsuranceResources": null
    }]
  },
  "errno": 0,
  "errmsg": "sucsses"
}