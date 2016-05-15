var gulp = require('gulp');
var cssMinify = require('gulp-clean-css');
var cssConcat = require('gulp-concat-css');

gulp.task('minCSS', function() {
   return gulp.src('styles/*.css')
       .pipe(cssMinify())
       .pipe(gulp.dest('styles'));
});

gulp.task('concatCSS', function() {
   return gulp.src('styles/*.css')
       .pipe(cssConcat('allinone.min.css'))
       .pipe(gulp.dest('styles/'));
});

gulp.task('concatAndMinifyCSS', function() {
   return gulp.src('styles/*.css')
       .pipe(cssConcat('allinone.min.css'))
       .pipe(cssMinify())
       .pipe(gulp.dest('styles'));
});