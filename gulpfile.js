const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const rigger = require('gulp-rigger');
const browserSync = require('browser-sync').create();


const cssFiles = [
    './src/components/breadcrumbs/breadcrumbs.css',
    './src/components/feedback/feedback.css',
    './src/components/footer/footer.css',
    './src/components/header/header.css',
    './src/components/info/info.css',
    './src/components/main/main.css',
    './src/components/paginator/paginator.css',
    './src/components/sidebar/sidebar.css',
    './src/components/slider/slider.css',
    './src/components/css/main.css'
]

const jsFiles = [
    './src/components/js/main.js',
    './src/components/js/lib.js'
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
    return del(['./src/dist/*'])
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
    gulp.watch('./src/components/css/**/*.css', styles)
    gulp.watch('./src/cpomponents/js/**/*.js', scripts)
    gulp.watch("./src/**/*.html").on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);

gulp.task('del', clean);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(styles,scripts)));
gulp.task('dev', gulp.series('build', 'watch'));