exports.kindofPokemon = function (req,res){
  var id = req.query.id;
  if(id !== null && id !== String){
    switch(id){
      case '001':
        return res.json({StatusCode:200,chinese:'妙蛙種子',english:'Bulbasaur',err:''});
        break;

      case '002':
        return res.json({StatusCode:200,message:'妙蛙草',english:'Ivysaur',err:''});
        break;

      case '003':
        return res.json({StatusCode:200,message:'妙蛙花',english:'Venusaur',err:''});
        break;

      case '004':
        return res.json({StatusCode:200,message:'小火龍',english:'Charmander',err:''});
        break;

      case '005':
        return res.json({StatusCode:200,message:'火恐龍',english:'Charmeleon',err:''});
        break;

      default:
        return res.json({StatusCode:400,err:'找不到ID'});

    }
  }
}