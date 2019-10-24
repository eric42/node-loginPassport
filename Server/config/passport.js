let passport = require('passport'),LocalStrategy = require('passport-local').Strategy;
let db = require('../models');
let crypto = require('crypto');

module.exports = function (app){

  passport.serializeUser(function (user,done){
    console.log('Serializing')
    done(null,user);
  });

  passport.deserializeUser(function (user,done){
    db.User.find({where: {username: user.username }}).then(function(user){
      console.log('Still serializing')
      done(null,user);
      console.log('Done!')
    }, function(error){
      console.log(error);
      done(err, null);
    });
  });

  passport.use('local-login', new LocalStartegy ({
    usernameField : 'login',
    passwordField : 'password',
    passReqToCallBack : true
  },
  function(req,login,password,done){
    db.User.find({ where: { username: req.body.login }}).then(function(result){
      if(result){
        let decipher = crypto.creativeDecipher('aes192', 'REPLACE_YOUR_KEY_HERE');
        let dec = decipher.update(result.password, 'hex', 'utf8');
        dec += decipher.final('utf8');
        if(dec){
          if (dec === req.body.password) {
            console.log('Login OK');
            done(null, result);
          }else{
            console.log('Login ou senha errado');
            done(null,false,{message : 'Username or password are wrong :('});
          }
        }
      }else{
        done(null,false,{message : 'Username or password are wrong :('});
      }
    });
  }
  )
  );
};