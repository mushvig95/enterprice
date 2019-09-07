const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const prefix = require('gulp-autoprefixer');

// compile scss into css and run browserSync

function style() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix('last 5 versions'))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream())
};

function watch() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });
    gulp.watch('src/sass/**/*.scss', style);
    gulp.watch('src/*.html').on('change', browserSync.reload);
    gulp.watch('src/scripts/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;