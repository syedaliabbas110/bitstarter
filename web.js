var express = require('express');

var app = express.createServer(express.logger());

var file1 = fs.readFileSync('index.html');

var buffer1 = new Buffer(20);

buffer1.write(file);

var string1 = buffer1.toString();

app.get('/', function(request, response) {
  response.send(string1);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
