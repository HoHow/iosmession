var express       = require('express');
var mission1      = require('./mission1');
var mission2      = require('./mission2');
var router        = express.Router();


console.log('api require');
router.get('/',function(req, res, next){
  res.send('respond with a resource');
});


router.use('/mission1',mission1);
router.use('/mission2',mission2);

module.exports    = router;