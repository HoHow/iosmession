var express       = require('express');
var router        = express.Router();
var controller    = require('../controller/mission1');

router.get('/',function(req, res, next){
  
  controller.kindofPokemon(req,res);
  
  res.end();
});


module.exports    = router;