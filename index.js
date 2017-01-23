var express = require('express');
var app = express();

app.get('*', function(req, res) {
  res.redirect('http://habitica.com' + req.url);
})

app.listen(80, function() {
  console.log('Listening on port 80');  
});
