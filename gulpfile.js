'use strict';

var gulp       = require('gulp');
var browserify = require('gulp-browserify');  // Bundle JS
var reactify   = require('reactify');         // Transform React JSX to JS
var babel      = require('gulp-babel');       // Transpile JSX and ES6
var del        = require('del');              // Clean folders

var config = {
  client: {
    in:  './src/client/main.js',
    out: './build/client'
  },
  server: {
    in:  './src/server/**/*.js',
    out: './build/server'
  },
  shared: {
    in:  './src/shared/**/*.js',
    out: './build/shared'
  }
};


gulp.task('server', function (callback) {
  del(config.server.out, function () {
    gulp.src([
        config.server.in,
      ])
      .pipe(babel())
      .pipe(gulp.dest(config.server.out))
      .on('error', callback)
      .on('end', callback);
  });
});

gulp.task('shared', function (callback) {
  del(config.shared.out, function () {
    gulp.src([
        config.shared.in,
      ])
      .pipe(babel())
      .pipe(gulp.dest(config.shared.out))
      .on('error', callback)
      .on('end', callback);
  });
});

gulp.task('client', function (callback) {
  del(config.client.out, function () {
    gulp.src(config.client.in)
      .pipe(browserify({
        transform: ['reactify']
      }))
      .pipe(gulp.dest(config.client.out))
      .on('error', callback)
      .on('end', callback);
  });
});

gulp.task('watch', function () {
  gulp.watch(config.server.in, ['server']);
  gulp.watch(config.client.in, ['client']);
  gulp.watch(config.shared.in, ['shared', 'client']);
});


gulp.task('default', ['server', 'shared', 'client']);
