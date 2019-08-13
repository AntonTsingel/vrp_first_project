const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();

const cssFiles = [
    './src/css/main.css',
    './src/css/media.css'
]

const jsFiles = [
    './src/js/main.js',
    './src/js/lib.js'
]

function styles() {
    return gulp.src(cssFiles)
    
    .pipe(concat('style.css'))
    
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))

 
    .pipe(cleanCSS({
        level: 2
    }))

    .pipe(gulp.dest('./src/dist/css'))
    .pipe(browserSync.stream());
}

function scripts() {

    return gulp.src(jsFiles)

    .pipe(concat('script.js'))

    .pipe(uglify({
        toplevel: true
    }))
    
    .pipe(gulp.dest('./src/dist/js'))
    .pipe(browserSync.stream());

}

function clean() {
    return del(['src/dist/*'])
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
    gulp.watch('./src/css/**/*.css', styles)
    gulp.watch('./src/js/**/*.js', scripts)
    gulp.watch("./src/**/*.html").on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);

gulp.task('del', clean);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(styles,scripts)));
gulp.task('dev', gulp.series('build', 'watch'));