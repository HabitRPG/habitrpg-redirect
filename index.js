var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('*', function(req, res) {
  res.redirect(301, 'https://habitica.com' + req.url);
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);  
});
