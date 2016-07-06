var express = require('express');
var router = express.Router();

var BookingTips = require('./booking/BookingTips');

var BookingTipsLimit = require('./booking/BookingTipsLimit');

var groupBookingTipsLimit = require('./booking/groupBookingTipsLimit');

var GetAreas = require('./booking/GetAreas');

var GetPromotion = require('./booking/GetPromotion');

var groupGetPromotion = require('./booking/groupGetPromotion');

var InvoiceInfo = require('./booking/InvoiceInfo');

var GetCustomerInfo = require('./booking/GetCustomerInfo');

var GetCustomerTemplate = require('./booking/GetCustomerTemplate');

var LoadBookingInfoV2 = require('./booking/LoadBookingInfoV2');

var GetPolicy = require('./booking/GetPolicy');

var GetRegion = require('./booking/GetRegion');

var CanBookCheck = require('./booking/CanBookCheck');

var SubmitOrder = require('./booking/SubmitOrder');

var grouploadbookinginfo = require('./booking/grouploadbookinginfo');

var groupInvoiceInfo = require('./booking/groupInvoiceInfo');

var groupBookingTips = require('./booking/groupBookingTips');

var ValidatePromotion = require('./booking/ValidatePromotion');

var DescriptionInfo = require('./booking/DescriptionInfo')

var FavoriteCheck = require('./booking/FavoriteCheck')

var CalendarInfo = require('./booking/CalendarInfo')

var TourMap = require('./booking/TourMap')

var ResourceSearch = require('./booking/ResourceSearch')

var ResourceSearchIns = require('./booking/ResourceSearchIns')

var FlightSearch = require('./booking/FlightSearch')

var PkgMinPriceCalcQueueInsert = require('./booking/PkgMinPriceCalcQueueInsert')

var GetUserPromotionActivitys = require('./booking/GetUserPromotionActivitys')

var GetOrderRefundChannel = require('./booking/GetOrderRefundChannel')

var EVisaInfoUrl = require('./booking/EVisaInfoUrl')

var CheckOrderIsDuplicated = require('./booking/CheckOrderIsDuplicated')

var ContinueBookTmpOrderV2 = require('./booking/ContinueBookTmpOrderV2')

var CheckUserByPhoneNum = require('./booking/CheckUserByPhoneNum')

var MateriaManage = require('./booking/MateriaManage')

var MateriaManageDelete = require('./booking/MateriaManageDelete')

var MateriaManageSave = require('./booking/MateriaManageSave')

var MateriaManageZoom = require('./booking/MateriaManageZoom')

var UpdateOrderInfo = require('./booking/UpdateOrderInfo')

var CustomerApply = require('./booking/CustomerApply')

var GetCarRecommendInfo = require('./booking/GetCarRecommendInfo')

// var ordersubmitvalidation = require('./booking/ordersubmitvalidation');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/LoadBookingInfoV2', function(req, res, next) {
  setTimeout(function(){
    res.send(LoadBookingInfoV2);
  }, 177)
});



router.get('/orderv2/GetCustomerTemplate', function(req, res, next) {
  res.send(GetCustomerTemplate);
});

router.get('/orderinput/GetCustomerInfo', function(req, res, next) {
  res.send(GetCustomerInfo);
});

router.get('/DeliverV2/InvoiceInfo', function(req, res, next) {
  res.send(InvoiceInfo);
});

router.post('/couponv2/GetPromotion', function(req, res, next) {
  setTimeout(function(){
    res.send(GetPromotion);
  }, 227)
});

router.get('/common/GetAreas', function(req, res, next) {
  res.send(GetAreas);
});

router.get('/BookingLimitV2/BookingTipsLimit', function(req, res, next) {
  res.send(BookingTipsLimit);
});

router.get('/BookingLimitV2/BookingTips', function(req, res, next) {
  res.send(BookingTips);
});

router.post('/hotel/GetPolicy', function(req, res, next) {
  res.send(GetPolicy);
});

router.get('/common/GetRegion', function(req, res, next) {
  res.send(GetRegion);
});

router.post('/api/trace/ordersubmitvalidation', function(req, res, next) {
  res.send("success");
});

router.post('/orderv2/CanBookCheck', function(req, res, next) {
  res.send(CanBookCheck);
});

router.post('/orderv2/SubmitOrder', function(req, res, next) {
  res.send(SubmitOrder);
});


// 团队游
router.post('/BookingLimit/BookingTipsLimit', function(req, res, next) {
  res.send(groupBookingTipsLimit);
});

router.post('/Coupon/GetPromotion', function(req, res, next) {
  res.send(groupGetPromotion);
});

router.post('/loadbookinginfo/loadbookinginfo', function(req, res, next) {
  res.send(grouploadbookinginfo);
});

router.get('/deliver/InvoiceInfo', function(req, res, next) {
  res.send(groupInvoiceInfo);
});

router.get('/BookingLimit/BookingTips', function(req, res, next) {
  res.send(groupBookingTips);
});

router.get('/couponv2/ValidatePromotion', function(req, res, next) {
  res.send(ValidatePromotion);
});


router.post('/product/DescriptionInfo', function(req, res, next) {
  res.send(DescriptionInfo);
});

router.get('/FavoriteAndSubscription/FavoriteCheck', function(req, res, next) {
  res.send(FavoriteCheck);
});

router.get('/Calendar/CalendarInfo', function(req, res, next) {
  res.send(CalendarInfo);
});

router.post('/product/TourMap', function(req, res, next) {
  res.send(TourMap);
});

router.post('/Resource/ResourceSearch', function(req, res, next) {
  res.send(ResourceSearch);

  // 新保险的资源请求
  // res.send(ResourceSearchIns);
});

// 选择其他航班接口
router.post('/flight/FlightSearch', function(req, res, next) {
  res.send(FlightSearch);
});



router.post('/Product/PkgMinPriceCalcQueueInsert', function(req, res, next) {
  res.send(PkgMinPriceCalcQueueInsert);
});

router.get('/Coupon/GetUserPromotionActivitys', function(req, res, next) {
  res.send(GetUserPromotionActivitys);
});

// 检查是否重复下单
router.post('/OrderInput/CheckOrderIsDuplicated', function(req, res, next) {
  res.send(CheckOrderIsDuplicated);
});



// 详情页
router.get('/OrderManage/GetOrderRefundChannel', function(req, res, next) {
  res.send(GetOrderRefundChannel);
});

// 电子签证信息请求接口
router.get('/OrderManage/GetOrderEVisaInfo', function(req, res, next) {
  res.send(EVisaInfoUrl);
});


// 填写页手机验证会员接口
router.post('/common/CheckUserByPhoneNum', function(req, res, next) {
  res.send(CheckUserByPhoneNum);
});


// 我携跳转页接口
router.get('/OrderManage/ContinueBookTmpOrderV2', function(req, res, next) {
  setTimeout(function(){
     res.send(ContinueBookTmpOrderV2);
  }, 2000)
});

// 自由行取消订单
router.post('/OrderManage/CustomerApply', function(req, res, next) {
  res.send(CustomerApply);
});

// 
router.post('/OrderManage/GetCarRecommendInfo', function(req, res, next) {
  res.send(GetCarRecommendInfo);
});


// 我携修改联系人 修改发票 修改旅客信息 修改订单 取消订单共用的接口
router.post('/OrderManage/UpdateOrderInfo', function(req, res, next) {
  res.send(UpdateOrderInfo);
});


// 材料上传查看
router.post('/Material/MateriaManage', function(req, res, next) {
  let RequestData = req.body.RequestData
  let RequestDataJson = JSON.parse(RequestData);
  let {
    FileDownloadDto,
    FileDownloadDTO,
    SendMessageDto,
    FileDeleteDTO
  } = RequestDataJson
  if( FileDownloadDto ){
    let {
      ImageType
    } = FileDownloadDto

    if( ImageType === 'T' ){
      // 查看
      res.send(MateriaManage);
    }
  }else if ( FileDownloadDTO ){
    let {
      ImageType
      } = FileDownloadDTO
    if( ImageType === 'P'){
      // 放大
      res.send(MateriaManageZoom);
    }
  } else if ( FileDeleteDTO ){
    // 删除
    res.send(MateriaManageDelete);
  } else if ( SendMessageDto ) {
    // 保存
    res.send(MateriaManageSave);
  } else {
    // TODO 新增
  }
});

module.exports = router;
