var express       = require('express');
var photo         = require('../controller/photo');
var router        = express.Router();

router.post('/',function(req,res){
  photo.getPhoto(req,res);
  
});


module.exports = router;
