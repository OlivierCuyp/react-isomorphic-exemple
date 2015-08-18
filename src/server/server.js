'use strict';

var express     = require('express');
var path        = require('path');
var React       = require('react');
var ReactRouter = require('react-router');
var routes      = require('../shared/routes');

var app = express();
var port = 3000;

app.use(express.static(path.join(__dirname, '../client')));

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'dist')));

app.use(function (req, res) {
  ReactRouter.run(routes, req.path, function (Root, state) {
    res.send('<!DOCTYPE html>' + React.renderToString(< Root />));
  });
});

app.listen(port);
console.log('Server running on Port : ' + port);
