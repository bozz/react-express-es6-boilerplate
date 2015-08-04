var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/../public/index.html'));
});

app.get('/api/users', function(req, res) {
  res.send([
    {firstName: "John", lastName: "Doe"},
    {firstName: "Susie", lastName: "Miller"},
    {firstName: "Dan", lastName: "Fletcher"}
  ]);
});

app.use(express.static('public'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});
