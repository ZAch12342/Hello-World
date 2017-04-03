var http = require("http");
function requestHandler(request, response){
  console.log("in comes a request to:" + request.url);
  response.end("Hello World from Zach");
}

var server = http.createServer(requestHandler);
console.log(process.env.PORT)
server.listen(process.env.PORT);
