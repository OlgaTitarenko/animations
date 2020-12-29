const gulp = require('gulp');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var babel = require('gulp-babel');


sass.compiler = require('node-sass');

function style() {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(concat('index.css'))
    .pipe(gulp.dest('./build/css'))
}

function script() {
  return gulp.src(['./src/views/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('build/assets/js/app'))
}

function watch() {
 
  gulp.watch('./src/scss/*.scss', style);
  gulp.watch('./src/views/*.js', script);

}

exports.style = style;
exports.watch = watch;
exports.script = script;

/*
gulp.watch('./scr/components/*.html').on('change', browserSync.reload);
gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream())
});
gulp.task('login-sass', function () {
    return gulp.src('scss/login/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
          cascade: false
      }))
      .pipe(minifyCSS())
      .pipe(concat('login.css'))
      .pipe(gulp.dest('css'));
});
gulp.task('browser', function () {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
});
gulp.task('watch', function () {
    gulp.watch('src/scss/*.scss', gulp.series('sass'));
});
gulp.task('default', gulp.parallel('browser','watch'));
*/