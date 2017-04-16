var http = require("http");
//var Poem = require ("poemify");
//var txtgen = require('txtgen');
var knockknock = require('knock-knock-jokes');

var localport = process.env.PORT || 3200;
function requestHandler(request, response){
  //let paragraph = txtgen.paragraph();
  //var p = new Poem(paragraph);
  //response.end(p.generate());
  response.end(knockknock());
}

var server = http.createServer(requestHandler);
console.log(localport)
server.listen(localport);
