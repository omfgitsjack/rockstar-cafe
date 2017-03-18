// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");

// Constants
var IMAGE_PATH = './images/**/*.{ttf,woff,eof,svg,png,jpeg,jpg}'
var HTML_PATH = './*.html'
// var VENDOR_CSS_PATH = './vendorcss/**/*.css'
// var VENDOR_JS_PATH = './vendorjs/**/*.js'
var BUILD_ROOT_PATH = './build/'

gulp.task('html', function() {
    gulp.src(HTML_PATH)
        .pipe(gulp.dest(BUILD_ROOT_PATH))
        .pipe(browserSync.stream());
})

gulp.task('images', function() {
    gulp.src(IMAGE_PATH)
        .pipe(gulp.dest(BUILD_ROOT_PATH + 'images/'))
        .pipe(browserSync.stream());
})

gulp.task('sass', function() {
    gulp.src('./style/*')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(BUILD_ROOT_PATH + 'css/'))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'images', 'html'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch(HTML_PATH, ['html'])
    gulp.watch(IMAGE_PATH, ['images'])
    gulp.watch('./**/*.scss', ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('build', ['sass', 'images', 'html'])

gulp.task('default', ['serve']);