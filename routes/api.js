var express       = require('express');
var mission1      = require('./mission1');
// var mission2      = require('./mission2');
// var mission3      = require('./mission3');
// var mission4      = require('./mission4');
// var mission5      = require('./mission5');
// var mission6      = require('./mission6');
var router        = express.Router();


console.log('api require');
router.get('/',function(req, res, next){
  res.send('respond with a resource');
});


router.use('/mission1',mission1);
// router.use('/mission2',mission2);
// router.use('/mission3',mission3);
// router.use('/mission4',mission4);
// router.use('/mission5',mission5);
// router.use('/mission6',mission6);
module.exports    = router;