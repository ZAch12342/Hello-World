var http = require("http");
function requestHandler(request, response){
  console.log("in comes a request to:" + request.url);
  response.end("Hello Chloe");
}

var server = http.createServer(requestHandler);

server.listen(80);
