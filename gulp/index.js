'use strict';

var fs = require('fs');
var argv = require('yargs').argv;
var tasks = fs.readdirSync(__dirname + '/tasks/');

require('./config');

// --release flag when executing a task
global.release = argv.release;

tasks.forEach(function (task) {
  require('./tasks/' + task);
});
