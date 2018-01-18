const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const eslint = require('gulp-eslint');
const nodemon = require('gulp-nodemon');
const FileCache = require('gulp-file-cache');

gulp.task('clean', () => {
  return del([
    '/dist'
  ])
});

gulp.task('build', ['clean', 'lint'], () => {

});

gulp.task('lint', () => {
  return gulp.src(['src/**/*.js', 'test/**/*.js', '/dist/**/*.js'])
    .pipe(eslint({
      fix: true
    }))
    .pipe(eslint.format());
});

gulp.task('test', ['lint'], () => {});
gulp.task('watch', ['lint'], () => {
  
});