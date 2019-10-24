exports.IsAuthenticated = function(req,res,next){
  console.log(req.isAuthenticated());
  
  if(req.isAuthenticated()){
    next();
  }else{
    res.render('welcome/index', {message:'Ops! Efetue o login para continuar!'});
  }
};

exports.destroySession = function(req,res,next){
  req.session.destroy();
  res.redirect('welcome/index');
};