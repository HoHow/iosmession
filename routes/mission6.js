var express       = require('express');
var photo         = require('../controller/photo');
var router        = express.Router();
var url          = require('url');
router.get('/',function(req,res){
  
  
  
    res.json({status:"1",url:'https://'+req.hostname+'/mg.jpg'})
  
  
  res.end(); 

});


module.exports = router;