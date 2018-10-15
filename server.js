var http = require('http');
var os = require('os');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n", os.hostname());
});

server.listen(8080);

console.log("Server running at http://0.0.0.0:8080/");
