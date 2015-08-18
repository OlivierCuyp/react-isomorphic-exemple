'use strict';

var React        = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header       = require('./common/header');

var App = React.createClass({
  render: function () {

    return (
      <html lang="en">
        <head>
          <title>Material-ui with isomorphic routes</title>
          <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
          <script src="main.js" />
        </head>
        <body id="app">
          <Header />
          <div className="container-fluid">
            <RouteHandler/>
          </div>
        </body>
      </html>
    );
  }
});

module.exports = App;
