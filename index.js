var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
	
	res.write('hello node js in heroku');
	 console.log('Get request received ');
              
	 res.status(200);
	 res.end();
	
});

app.post('/', function(req, res){
    staTus = req.body.data;

 console.log(staTus);   
 console.log('Post req received ');

 res.status(200);
 res.end();
});

var server = app.listen(port,function () {
  console.log("Example app listening at ")
});

