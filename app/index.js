
/**
 * Module dependencies.
 */
var express = require('express');
var app = express();

var data = {
  status: 'alive',
  name: 'Desmond Morris',
  firstname: 'Desmond',
  lastname: 'Morris',
  date_of_birth: '09/11/1983',
  age: 30,
  height: 180.34,
  fuel: 1874060,
  photo: 'http://dezz.me/pic',
  email: 'hi@desmondmorris.com',
  blurb: 'Software engineer. Hip-Hop fan. Runner. Hacker of things. I head up engineering at DoSomething.org',
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

app.get('/', function(req, res) {
  res.type('application/json');
  res.end(JSON.stringify(data));
});

app.listen(process.env.PORT || 3000);
