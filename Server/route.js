'use scrict'

modul.exports = function(app,passport)
{
  app.route('/*').get(function (req, res){
    res.render('welcome/index');
  });

  app.post('/auth/login', function(req,res,next){
    passport.authenticate('local-login', function(err, user){
      if(!user){
        res.send('Usuario ou senha errada');
        }else{
          req.logIn(user, function(error){
            if(error){
              return next(error);
            }else{
              return res.send('Request Login Sucess');
            }
          });
        }
    })(req, res, next);
  });
}