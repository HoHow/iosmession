// var multiparty = require('multiparty');

// exports.getPhoto = function(req,res) {
//     // var data = {
//     //   id:req.body.id,
//     //   type:req.body.type,
//     //   time:req.body.time,
//     //   date:req.body.date,
//     //   size:req.body.size,
//     // }
//     // console.log(data);
    
//     var form = new multiparty.Form({uploadDir:'./uploads'});
//     form.parse(req, function(err,files) {      
//       if(!files){
//           res.status(400).json({message:'請確認上傳圖片'});
//           return;
//       }else{
//         if(files === undefined || Object.keys(files).length === 0){
//           res.json({message:'圖片上傳失敗'});  
//         }else{
//           res.json({message:'圖片上傳成功'});  
//         }
//       }
      
//     });

// };