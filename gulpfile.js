var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var removeLogging = require('gulp-remove-logging');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

/* Compile Less Files */
gulp.task('compile-less', function () {
    gulp.src('./build/less/files/*.less')
        .pipe(less())
        .pipe(gulp.dest('./build/css/'));
});

/* Watch Less Files for Changes */
gulp.task('watch-less', function () {
    gulp.watch('./build/less/**/*.less', ['compile-less', 'minify-css']);
});

/* Minify CSS*/
gulp.task('minify-css', function () {
    gulp.src('./build/css/*.css')
        .pipe(gulp.dest('./dist/css/'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css/'));
});

/*Watch JS*/
gulp.task('watch-js', function () {
    gulp.watch('./build/script/*.js', ['minify-js']);
});

/* Minify JS*/
gulp.task('minify-js', function () {
    return gulp.src('./build/script/*.js')
        .pipe(gulp.dest('./dist/script/'))
        .pipe(removeLogging())
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/script/'))

        // Copy files in the /dist/lib folder to make CommonJS imports work
        .pipe(rename({
            basename: 'index'
        }))
        .pipe(gulp.dest('./dist/lib/'));
});

/*Sync with Browser*/
gulp.task('serve', function () {
    // Serve Files
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: Math.ceil(Math.random()*10000)
    });
    gulp.watch("./**/*.less").on("change", reload);
    gulp.watch("./**/*.html").on("change", reload);
    gulp.watch("./**/*.js").on("change", reload);
    gulp.watch("./**/*.css").on("change", reload);
});

/* Run `gulp` from Terminal */
gulp.task('default', ['watch-less', 'watch-js', 'serve']);
