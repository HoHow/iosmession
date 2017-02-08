exports.searchPokemon = function(req,res){
  var headers = req.headers;
  var name     = headers['name'];

  switch(name){
    case 'Bulbasaur':
      return res.json({StatusCode:200,id:1,chinese:'妙蛙種子',english:'Bulbasaur',weight:6.9,err:''});
      break;
    case 'Ivysaur':
      return res.json({StatusCode:200,id:2,chinese:'妙蛙草',english:'Ivysaur',weight:13.1,err:''});
      break;
    case 'Venusaur':
      return res.json({StatusCode:200,id:3,chinese:'妙蛙花',english:'Venusaur',weight:100.1,err:''});
      break;
    case 'Charmander':
      return res.json({StatusCode:200,id:4,chinese:'小火龍',english:'Charmander',weight:8.5,err:''});
      break;
    case 'Charmeleon':
      return res.json({StatusCode:200,id:5,chinese:'火恐龍',english:'Charmeleon',weight:19,err:''});
      break;
    default:
      return res.json({StatusCode:400,err:'找不到該神奇寶貝'});

  }
}