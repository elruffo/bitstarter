Avar fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var str2pass = fs.readFileSync('myindex.html').toString();;

app.get('/', function(request, response) {
  response.send(str2pass)
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
