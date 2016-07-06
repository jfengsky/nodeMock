var express = require('express');
var router = express.Router();

var Comparison = require('./compare/Comparison');
var GetHotelStarInfo = require('./compare/GetHotelStarInfo')

router.post('/product/Comparison', function(req, res, next) {

    res.send(Comparison);

});

router.post('/ProductComparison/GetHotelStarInfo', function(req, res, next) {

    res.send(GetHotelStarInfo);

});

// router.get('/Calendar/CalendarInfo', function(req, res, next) {
//   res.send(CalendarInfo);
// });


module.exports = router;
