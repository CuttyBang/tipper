var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var cssnano = require('gulp-cssnano');
var rename = require("gulp-rename");
var gulpsync = require('gulp-sync')(gulp);
var glob = require('glob');
var neat = require('node-neat').includePaths;

var dirs = {
  theme:'../',
  assets:'assets/',
  css:'css/',
  js:'js/',
  scss:'./scss/'
};


gulp.task('lint', function() {
  return gulp.src(dirs.js + '*.js')
  .pipe(jshint({
    asi: true
  }))
  .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('sass', function(){
  return gulp.src(dirs.scss + '*.scss')
  .pipe(sass({
    includePaths: ['sass'].concat(neat)
  }))
  .pipe(gulp.dest(dirs.theme + dirs.assets +  dirs.css));
});

//watch
gulp.task('watch', function(){
  gulp.watch('./' +  dirs.js + '*.js', ['lint','scripts'])
  gulp.watch(dirs.scss + '*.scss', gulpsync.sync(['sass','styles']));
});

gulp.task('scripts', function() {
  return browserify('./' + dirs.js + '*.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(dirs.theme + dirs.assets +  dirs.js));
});

gulp.task('styles', function() {
  return gulp.src(dirs.theme + dirs.assets +  dirs.css + 'style.css')
    .pipe(cssnano())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(dirs.theme + dirs.assets +  dirs.css));
});


gulp.task('default', ['watch']);

gulp.task('build', gulpsync.sync(['sass', 'styles', 'lint', 'scripts']));
