exports.searchPokemon = function(req,res){
  var headers = req.headers;
  var name     = headers['name'];

  switch(name){
    case 'Bulbasaur':
      var url = 'https://'+req.hostname+'/001.jpg';
      return res.json({StatusCode:200,id:001,chinese:'妙蛙種子',english:'Bulbasaur',weight:6.9,url:url});
      break;
    case 'Ivysaur':
      var url = 'https://'+req.hostname+'/002.jpg';
      return res.json({StatusCode:200,id:002,chinese:'妙蛙草',english:'Ivysaur',weight:13.1,url:url});
      break;
    case 'Venusaur':
      var url = 'https://'+req.hostname+'/003.jpg';
      return res.json({StatusCode:200,id:003,chinese:'妙蛙花',english:'Venusaur',weight:100.1,url:url});
      break;
    case 'Charmander':
      var url = 'https://'+req.hostname+'/004.jpg';
      return res.json({StatusCode:200,id:004,chinese:'小火龍',english:'Charmander',weight:8.5,url:url});
      break;
    case 'Charmeleon':
      var url = 'https://'+req.hostname+'/005.jpg';
      return res.json({StatusCode:200,id:005,chinese:'火恐龍',english:'Charmeleon',weight:19,url:url});
      break;
    default:
      return res.json({StatusCode:400,error:'找不到該神奇寶貝'});

  }
}