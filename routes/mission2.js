var express         = require('express');
var url = require("url");
var controller      = require('../controller/pokemon');

var router          = express.Router();



router.get('/',function(req, res, next){
  
  controller.searchPokemon(req,res);
  res.end();
});


module.exports      = router; 