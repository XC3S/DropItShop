var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var _ = require('underscore');


// start server
server.listen(3000,function(){
	console.log("server started");				
});

// provide storefront files 
app.get('/',function(req, res){
	res.sendFile(__dirname + '/storefront/index.html');
});

// compile storefront scss
app.use(sassMiddleware({
    src: __dirname + '/storefront/static/scss',
    dest: __dirname + '/storefront/static/css',
    debug: false,
    outputStyle: 'compressed'
}));

// host storefront files
app.use('/css', express.static(__dirname + '/storefront/static/css'));
app.use('/js', express.static(__dirname + '/storefront/static/js'));