var express       = require('express');
var photo         = require('../controller/photo');
var router        = express.Router();
var url          = require('url');
router.get('/',function(req,res){
  
  
  
    res.json({message:"下載成功",url:'https://'+req.hostname+'/mg3008.JPG'})
  
  
  res.end(); 

});


module.exports = router;