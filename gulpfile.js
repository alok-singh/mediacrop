let gulp = require('gulp');
let less = require('gulp-less');
let minifyCSS = require('gulp-csso');
let concat = require('gulp-concat');
let gulpCopy = require('gulp-copy');

gulp.task('js', function() {
    return gulp.src('JS/**/*.js')
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('Build/JS'))
});

gulp.task('html', function() {
    return gulp
        .src('HTML/Templates/*.html')
        .pipe(gulpCopy('Build/'))
});


gulp.task('css', function() {
    return gulp
        .src('CSS/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('Build/CSS'))
});



gulp.task('default', ['css', 'html', 'js']);

