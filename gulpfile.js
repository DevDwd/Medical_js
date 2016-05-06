var gulp = require('gulp');

// Import dependencies
// var jshint = require('gulp-jshint'),  
  var  less   = require('gulp-less'),
    recess = require('gulp-recess'),
 minifyCSS = require('gulp-minify-css'),
    path   = require('path');
var source = './bower_components/';
var dist = './public/';


gulp.task('copyFiles', function () {  
	console.log('copie jquery en cours');
    gulp.src(source + 'jquery/dist/jquery.min.js')
        .pipe(gulp.dest(dist + 'javascripts'));
});