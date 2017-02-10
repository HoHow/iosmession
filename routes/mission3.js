var express         = require('express');
var controller      = require('../controller/mission3');
var bodyParser    = require('body-parser');
var router          = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.post('/',function(req, res, next){
  
  controller.searchPokemon(req, res);
  
});


module.exports      = router; 

