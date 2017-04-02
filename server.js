var http = require("http");
function requestHandler(reqest, response){
  console.log("in comes a request to:" + request.url);
  respone.end("Hello World");
}

var server = http.createServer(requstHandler);

server.listen(3000);
