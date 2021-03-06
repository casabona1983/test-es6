var gulp = require('gulp');
var util = require('gulp-util');
var uglify = require('gulp-uglify');
var compass = require('gulp-compass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");
var babelify = require('babelify');
var browserify = require('browserify');
var bs = require('browser-sync').create();
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


gulp.task('traspaso-build', function () {
  gulp.src(['src/index.html',
      'src/lib/**',
      'src/images/**',
      'src/assets/**'
    ], {
      base: './src'
    })
    .pipe(gulp.dest('build/'));
});

gulp.task('compass', function () {

  gulp.src(['src/sass/**/*.scss'])
    .pipe(compass({
      css: 'build/css',
      sass: 'src/sass',
      image: 'build/images'
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(cssnano())
    .pipe(gulp.dest('build/css'))
    .pipe(gulp.dest('src/css'))
    .pipe(bs.reload({
      stream: true
    }));
});

gulp.task('minify-js-2', function () {
  return browserify('src/js/home.js')
    .transform(babelify, {
      presets: ["es2015"]
    })
    .bundle()
    .pipe(source('home.js'))
    .pipe(buffer())
    .pipe(uglify({
      compress: {
        /*drop_console: true*/
      }
    }))
    .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function () {
  gulp.watch(['src/lib/**', 'src/images/**', 'src/assets/**', 'src/individuales/**', 'src/index.html'], ['traspaso-build']);
  gulp.watch('src/sass/*.scss', ['compass']);
  gulp.watch('src/js/**/*.js', ['minify-js-2']);
  gulp.watch("src/**/*.html").on('change', bs.reload);
});

gulp.task('browser-sync', function () {
  bs.init({
    server: "./build",
    https: true
  });
});

gulp.task('default', ['traspaso-build', 'compass', 'minify-js-2', 'watch', 'browser-sync'], function () {});