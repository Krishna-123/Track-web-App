var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
/*app.use(bodyParser.raw({
    type: "text/html"
}));
*/
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
	
	res.write('hello node js in heroku');
	 console.log('Get request received ');
              
	 res.status(200);
	 res.end();
});

app.post('/', function(req, res){
   // var staTus = JSON.stringify(req.body);
   //var locObj =  JSON.parse(req.body);
   // var status = JSON.stringify(eval("(" + req.body + ")"));

    // var status = JSON.stringify(req.body);
    // console.log("Request Body Obj: "+status );

	// console.log(staTus);   
   var obj = JSON.stringify(req.body) ;
   var obj1 = JSON.parse(obj) ;

 console.log("Post Request: "+  obj);
 console.log("Post Request Param: "+  obj1.Lat);

 console.log('Post req received ');

 var staTus = "done";
 
 res.status(200);
 res.end(staTus);
});

var server = app.listen(port,function () {
  console.log("Example app listening ")
});

