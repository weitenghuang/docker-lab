var http = require('http');
var os = require('os');
http.createServer(function printServerName(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello world!!!, you land on ' + os.hostname());
}).listen(3030);
