var express       = require('express');
var photo         = require('../controller/photo');
var router        = express.Router();
var url          = require('url');
router.get('/',function(req,res){

  res.json({url:'https://'+req.hostname+'/mg3008.jpg'})
  res.end();
});


module.exports = router;