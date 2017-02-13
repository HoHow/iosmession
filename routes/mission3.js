var express         = require('express');
var controller      = require('../controller/pokemon');
var bodyParser    = require('body-parser');
var router          = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.post('/',function(req, res, next){
  
  controller.kindofPokemon(req, res);
  res.end();
});


module.exports      = router; 

