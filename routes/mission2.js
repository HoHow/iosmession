var express         = require('express');
var controller      = require('../controller/mission2');
var router          = express.Router();



router.get('/',function(req, res, next){
  
  controller.searchPokemon(req,res);
  res.end();
});


module.exports      = router; 