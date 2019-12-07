'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


sass.compiler = require('node-sass');


gulp.task('serve', ['sass'], function() {

  browserSync.init({
      server: "./app"
  });

  gulp.watch("app/scss/*.scss", gulp.series('sass'));
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('./app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/scss/**/*.scss', gulp.series('sass'));
});
