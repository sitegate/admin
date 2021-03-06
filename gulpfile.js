'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var foso = require('foso');
var js = require('fosify-js');
var sass = require('fosify-sass');
var fs = require('fs');

gulp.task('develop', function() {
  var opts = {
    src: './public/src',
    dest: './public/dist',
    watch: true,
    esnext: true,
    livereload: {
      port: 4123,
      key: fs.readFileSync(__dirname + '/certs/privatekey.pem'),
      cert: fs.readFileSync(__dirname + '/certs/certificate.pem')
    }
  };

  foso
    .please(opts)
    .fosify(js)
    .fosify(sass)
    .now();

  nodemon({
    script: 'app.js',
    ext: 'js jade',
  }).on('restart', function() {
    setTimeout(function() {
      foso.changed();
    }, 500);
  });
});

gulp.task('default', [
  'develop'
]);
