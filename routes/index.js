var express = require('express');
var router = express.Router();
var readdirp = require('readdirp');
// 资源请求为空
var emptyPositiveXSearch = require('./xres/emptyPositiveXSearch');

// 资源列表数据
var PositiveXSearch = require('./xres/PositiveXSearch');

// 第二页资源列表数据
var PositiveXSearch2 = require('./xres/PositiveXSearch2');

// 用车蒙版和TDD
var GetProductDetails = require('./xres/GetProductDetails');

// 无资源的蒙版数据
var GetProductDetailsEmpty = require('./xres/GetProductDetailsEmpty');

// 门票蒙版数据
var GetProductDetailsTicket = require('./xres/GetProductDetailsTicket');

// 签证蒙版数据
var GetProductDetailsVisa = require('./xres/GetProductDetailsVisa');

var GetProductDetailsWifi = require('./xres/GetProductDetailsWifi');

// 请求购物车接口数据
var GetShoppingCartInfo = require('./xres/GetShoppingCartInfo');

// 当购物车接口返回为空，购物车页面显示无资源
var GetShoppingCartInfoEmpty = require('./xres/GetShoppingCartInfoEmpty');

// 提交哦奥蒙版的返回
// 正常时FailedReasons为[],否则有内容
var Booking = require('./xres/Booking');

var BookingSuccess = require('./xres/BookingSuccess');

// 蒙版你参数错误
var dialogArgumentError = require('./xres/dialogArgumentError');

var PayError = require('./xres/PayError');

var PaySuccess = require('./xres/PaySuccess');

// 删除成功
var DeleteProductSuccess = require('./xres/DeleteProductSuccess');

// 删除失败
var DeleteProductError = require('./xres/DeleteProductError');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 城市资源列表请求
router.post('/bookingnext/XResource/PositiveXSearch', function(req, res, next) {
  setTimeout(function(){
    if(req.body.segment == 2){
      res.send(PositiveXSearch2)
    } else {
      res.send(PositiveXSearch)
    }
  },200)
  
});


// 资源蒙版
router.post('/bookingnext/XItemDetail/GetProductDetails', function(req, res, next) {
  var param = JSON.parse(req.body.querydata)
  var categoryId = param.CategoryID

  // 2:用车；15:签证; 99:WIFI
  if(categoryId == 2){

    // 用车 TDD蒙版
    setTimeout(function(){
      res.send(GetProductDetails)
    }, 200)
    

  } else if(categoryId == 4) {

    // 门票
    res.send(GetProductDetailsTicket)
  } else if( categoryId == 15 ) {

    // 签证
    setTimeout(function(){
      res.send(GetProductDetailsVisa)
    }, 200)
  } else if( categoryId == 99 ){
    console.log('wifi')
    // WIFI
    res.send(GetProductDetailsWifi)
  } else {
    res.send(GetProductDetails)
  }
});


// 请求购物车接口
router.post('/bookingnext/XResource/GetShoppingCartInfo', function(req, res, next) {

  // 正常返回
  setTimeout(function(){
    res.send(GetShoppingCartInfo)
  }, 1000)
  
  // 返回为空
  // setTimeout(function(){
  //   res.send(GetShoppingCartInfoEmpty)
  // }, 500)
});

// 提交蒙版接口
router.post('/bookingnext/XItemDetail/Booking', function(req, res, next) {
  setTimeout(function(){
    res.send(BookingSuccess)
  }, 1000)
});

// 列表页去支付接口
router.post('/bookingnext/XResource/AllToPay', function(req, res, next) {
  setTimeout(function(){
    res.send(PayError)
  }, 500)
});

// 购物车页去支付接口
router.post('/bookingnext/XResource/ToPay', function(req, res, next) {
  setTimeout(function(){
    res.send(PayError)
  }, 500)
});

// 购物车删除产品接口
router.post('/bookingnext/XResource/DeleteProduct', function(req, res, next) {
  setTimeout(function(){
    res.send(DeleteProductSuccess)
  }, 2000)
});

router.post('/getfiles', function(req, res, next) {
  readdirp({ root: './public/express', fileFilter: '*.html' },function(fileInfo){
    //console.log(fileInfo)
  },function(_err, _res){
    //console.log(_err)
    let fileArray = []
    let {
      files
    } = _res
    files.map(({name}) => {
      fileArray.push(name)
    })
    res.send({"fileList":fileArray})
  })
});

router.post('/Webresource/Webresource/ResPackageOnline/js/tools/underscore.js', function(req, res, next) {
  res.sendfile('Webresource/Webresource/ResPackageOnline/js/tools/address-1.0_calendar-6.0_jmp-1.0_validate-1.1_lazyLoad-1.0.js')
});


module.exports = router;
