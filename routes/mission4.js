var express = require('express');
var controller = require('../controller/mission4');
var multiparty = require('multiparty');
var http = require('http');
var util = require('util');

var router  = express.Router();


router.post('/',function(req, res, next){
  controller.transform(req,res);

  
});


module.exports = router;