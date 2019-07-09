const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css

function style() {
    // 1. find scss
    return gulp.src('src/sass/**/*.scss')
    // 2. pass through compiler
    .pipe(sass().on('error',sass.logError))
    // 3. output 
    .pipe(gulp.dest('src/css'))
    // 4. browser sync
    .pipe(browserSync.stream());
};

function watch() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });
    gulp.watch('src/sass/**/*.scss',style);
    gulp.watch('src/*.html').on('change',browserSync.reload);
    gulp.watch('src/scripts/**/*.js').on('change',browserSync.reload);
}

exports.style = style;
exports.watch = watch;