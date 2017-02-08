var express         = require('express');
var router          = express.Router();
var controller      = require('../controller/mission2');

router.get('/',function(req, res, next){
  
  controller.searchPokemon(req,res);
  res.end();
});


module.exports      = router; 