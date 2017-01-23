var express = require('express');
var app = express();

var http = express.createServer();

http.get('*', function(req, res) {
  res.redirect('http://habitica.com' + req.url)
})

http.listen(8080);
