'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

gulp.task('eslint', () => {
  return gulp.src('app.js')
    .pipe($.eslint({
      fix: true
    }))
    .pipe($.eslint.format());
});

gulp.task('watch', () => {
  gulp.watch('app.js', ['eslint']);
});

gulp.task('start', () => {
  $.nodemon({
    script: 'app.js',
    ext: 'js',
    env: {NODE_ENV: 'dev'}
  });
});

gulp.task('default', ['start'])
