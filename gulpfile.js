// Gulpfile
// ========
// For running development tasks

'use strict';

// Require dependencies
const gulp    = require('gulp'),
      jshint  = require('gulp-jshint'),
      pump    = require('pump'),
      uglify  = require('gulp-uglify'),
      gls     = require('gulp-live-server');


// Lint JavaScript
// ---------------
gulp.task('lint', () => {
  return gulp.src(['gulpfile.js', './src/assets/js/*.js'])
          .pipe(jshint())
          .pipe(jshint.reporter('jshint-stylish'));
});


// Minify JS
// ---------
gulp.task('uglify', (cb) => {
  pump([
    gulp.src('./src/assets/js/*.js'),
    uglify(),
    gulp.dest('./src/public/js')
  ], cb);
});


// Transpile LESS
// --------------


// Start a server
// --------------
gulp.task('server', () => {
  var server = gls.new(['./src/index.js']);
  server.start();

  gulp.watch(['./src/assets/**/*.*'], (file) => {
    server.notify.apply(server, [file]);
  });

  gulp.watch('./src/index.js', () => {
    server.start.bind(server)();
  });
});


// Watch files
gulp.watch(['gulpfile.js', './src/assets/js/*.js'], ['lint', 'uglify']);


// Default tasks
gulp.task('default', ['lint']);
