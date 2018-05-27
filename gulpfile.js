let gulp = require('gulp');
let less = require('gulp-less');
let minifyCSS = require('gulp-csso');
let concat = require('gulp-concat');
let gulpCopy = require('gulp-copy');
let rename =  require('gulp-rename');

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
        .src('CSS/dragonFight/styles.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(rename('app.dragonFight.css'))
        .pipe(gulp.dest('Build/CSS/'))
});



gulp.task('default', ['dragonFightCss', 'dragonFightHtml', 'dragonFightJS']);

