var net = require('net');
var port = process.env.PORT || 3000;

var server = net.createServer();  
server.on('connection', handleConnection);

server.listen(port);


/*server.listen(port, function() {  
  console.log('server listening to %j', server.address());
});
*/
/*server.listen(3000,'192.168.43.239', function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
});
*/

function handleConnection(conn) {  
  var remoteAddress = conn.remoteAddress + ':' + conn.remotePort;
  console.log('new client connection from %s', remoteAddress);

  conn.on('data', onConnData);
  conn.once('close', onConnClose);
  conn.on('error', onConnError);

  function onConnData(d) {
   // console.log('connection data from %s: %j', remoteAddress, d);
    console.log('data is ' + d);
    conn.write(d);
  }

  function onConnClose() {
    console.log('connection from %s closed', remoteAddress);
  }

  function onConnError(err) {
    console.log('Connection %s error: %s', remoteAddress, err.message);
  }
}
