var multiparty = require('multiparty');

exports.getPhoto = function(req,res) {
    // var data = {
    //   id:req.body.id,
    //   type:req.body.type,
    //   time:req.body.time,
    //   date:req.body.date,
    //   size:req.body.size,
    // }
    
    
    var form = new multiparty.Form({uploadDir:'./uploads'});
    form.parse(req, function(err,files) {      
      if(!files){
          res.status(400).json({status:"-2",error:'請確認上傳圖片'});
          return;
      }else{
        if(files === undefined || Object.keys(files).length === 0){
          res.json({status:"-1",error:'圖片上傳失敗'});  
        }else{
          res.json({status:"1",message:'圖片上傳成功'});  
        }
      }
      
    });

};
