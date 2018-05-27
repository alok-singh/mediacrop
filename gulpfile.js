'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var gulpCopy = require('gulp-copy');
var rename =  require('gulp-rename');

/*
     could have uglified files if required to deployed to production 
*/

gulp.task('libs', function() {
    return gulp.src('Libs/*.js')
        .pipe(concat('app.libs.js'))
        .pipe(gulp.dest('Build/JS'))
})

gulp.task('dragonFightJS', ['libs'], function() {
    return gulp.src('JS/DragonFight/**/*.js')
        .pipe(concat('app.dragonFlight.js'))
        .pipe(gulp.dest('Build/JS'))
});

gulp.task('dragonFightHtml', function() {
    return gulp
        .src('HTML/**/*.html')
        .pipe(gulpCopy('Build/'))
});


gulp.task('dragonFightCss', function() {
    return gulp
        .src('CSS/DragonFight/styles.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(rename('app.dragonFight.css'))
        .pipe(gulp.dest('Build/CSS/'))
});



gulp.task('default', ['dragonFightCss', 'dragonFightHtml', 'dragonFightJS']);

