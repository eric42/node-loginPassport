var express = require('express'),
session = require('express-session');
path = require('path'),
bodyParser = require('body-parser'),
cons = require('consolidate'),
dust = require('dustjs-helpers'),
dustlinkedin = require('dustjs-linkedin')
passport = require('passport'),
passportConfig = require('./server/config/passport'),
cookieParser = require('cookie-parser');
app = express();

var server = require('http').createServer(app);

app.engine('dust',cons.dust);

app.use(cookieParser('MyK3y'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(session({secret:'MyK3y',saveUninitialized:true,resave:true,cookie: {maxAge: 3600000}}));

app.use(passport.initialize());
app.use(passport.session());
require('./server/config/passport')(app);

app.set('view engine', 'dust','dustjs-linkedin');

app.set('views',__dirname + '/views');

app.use(express.static(path.join(__dirname,'public')));

app.use(express.static(path.join(__dirname,'src')));


let db = require('./server/models');


db.sequelize.sync({force:true}).then(function(){
    console.log('DB Connection - OK');
    let crypto = require('crypto');

	let crypto = require('crypto');

	let cipher = crypto.createCipher('aes192','REPLACE_YOUR_KEY_HERE');

	let crypted = cipher.update('ADM','utf8','hex');
	crypted += cipher.final('hex');
	if(crypted){
	  db.User.create({username: 'ADM', password: crypted}).then(function() {
	    console.log('ADM user inserted');
	  }, function (error) {
	    console.log(error);res.sendStatus(500);
	  });
	}else{
	  console.log('Something went wrong with crypting the password :(');
	}
});

app.listen(process.env.PORT || 3000, function(){
	console.log('Server Started On Port 3000');
});

 require('./server/routes')(app,passport);