
/**
 * Module dependencies.
 */
var http = require('http');

var data = {
  status: 'alive',
  name: 'Desmond Morris',
  firstname: 'Desmond',
  lastname: 'Morris',
  date_of_birth: '09/11/1983',
  age: 30,
  photo: 'http://dezz.me/pic',
  email: 'hi@desmondmorris.com',
  web: 'http://desmondmorris.com',
  twitter: {
    'username': 'desmondmorris',
    'url': 'http://twitter.com/desmondmorris',
    'short': 'http://dezz.me/twitter'
  },
  github: {
    'username': 'desmondmorris',
    'url': 'http://github.com/desmondmorris',
    'short': 'http://dezz.me/github'
  },
  linkedin: {
    'username': 'desmondmorris',
    'url': 'http://linkedin.com/in/desmondmorris',
    'short': 'http://dezz.me/linkedin'
  },
  irc: 'desmondmorris',
  skype: 'desmondmorris'
};

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(data));
}).listen(process.env.PORT || 3000);
