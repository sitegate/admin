'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

module.exports = gulp.task('serve', function () {
  nodemon({
    script: 'app.js'
  });
});