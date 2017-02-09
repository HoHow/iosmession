exports.searchPokemon = function(req,res){
  var id = req.body.id;

 
    switch(id){
      case '001':
        return res.json({StatusCode:200,id:1,chinese:'妙蛙種子',english:'Bulbasaur',weight:6.9});
        break;

      case '002':
        return res.json({StatusCode:200,id:2,chinese:'妙蛙草',english:'Ivysaur',weight:13.1});
        break;

      case '003':
        return res.json({StatusCode:200,id:3,chinese:'妙蛙花',english:'Venusaur',weight:100.1});
        break;

      case '004':
        return res.json({StatusCode:200,id:4,chinese:'小火龍',english:'Charmander',weight:8.5});
        break;

      case '005':
        return res.json({StatusCode:200,id:5,chinese:'火恐龍',english:'Charmeleon',weight:19.0});
        break;

      default:
        return res.json({StatusCode:400,err:'找不到該神奇寶貝'});

    }
  
}