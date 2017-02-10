var multiparty = require('multiparty');
var http = require('http');
var util = require('util');

exports.transform = function(req,res){
  var form = new multiparty.Form();

  
  form.parse(req, function(err, fields) {
    if(err) throw err;
    var id = fields['id'].toString();
    

    switch(id){
      case '001':
        return res.json({StatusCode:200,id:1,chinese:'妙蛙種子',property:[{"first":"草","sencond":"毒"}],english:'Bulbasaur',weight:6.9});
        break;

      case '002':
        return res.json({StatusCode:200,id:2,chinese:'妙蛙草',property:[{"first":"草","sencond":"毒"}],english:'Ivysaur',weight:13.1});
        break;

      case '003':
        return res.json({StatusCode:200,id:3,chinese:'妙蛙花',property:[{"first":"草","sencond":"毒"}],english:'Venusaur',weight:100.1});
        break;

      case '004':
        return res.json({StatusCode:200,id:4,chinese:'小火龍',property:[{"first":"火","sencond":"無"}],english:'Charmander',weight:8.5});
        break;

      case '005':
        return res.json({StatusCode:200,id:5,chinese:'火恐龍',property:[{"first":"火","sencond":"無"}],english:'Charmeleon',weight:19.0});
        break;

      default:
        return res.json({StatusCode:400,err:'找不到該神奇寶貝'});

    }

    });
  
};

