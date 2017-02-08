exports.kindofPokemon = function (req,res){
  var id = req.query.id;

    if(id !== null && id !== String){
    switch(id){
      case '001':
        return res.json({StatusCode:200,chinese:'妙蛙種子',err:''});
        break;

      case '002':
        return res.json({StatusCode:200,chinese:'妙蛙草',err:''});
        break;

      case '003':
        return res.json({StatusCode:200,chinese:'妙蛙花',err:''});
        break;

      case '004':
        return res.json({StatusCode:200,chinese:'小火龍',err:''});
        break;

      case '005':
        return res.json({StatusCode:200,chinese:'火恐龍',err:''});
        break;

      default:
        return res.json({StatusCode:400,err:'找不到ID'});

    }
  }
}