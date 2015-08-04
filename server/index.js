var express = require('express');
var app = express();
var path = require('path');
var faker = require ('faker');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/../public/index.html'));
});

app.get('/api/users', function(req, res) {
  res.send(Array.apply(null, Array(10)).map(function() {
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email()
    };
  }));
});

app.use(express.static('public'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});
