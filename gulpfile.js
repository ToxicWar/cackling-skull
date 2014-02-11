var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass')
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var connect = require('gulp-connect');

var paths = {
  styles: ['app/styles/*.scss'],
  scripts: ['app/scripts/*.coffee'],
  images: 'app/images/*',
  index: ['app/index.html', 'app/favicon.ico']
};

gulp.task('styles', function () {
    gulp.src(paths.styles)
        .pipe(sass())
        .pipe(gulp.dest('build/css'))
        .pipe(connect.reload());
});

gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src(paths.scripts)
	.pipe(coffee())
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(connect.reload());
});

// Copy all static images
gulp.task('images', function() {
 return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/img'))
    .pipe(connect.reload());
});

// Copy all static images
gulp.task('index', function() {
 return gulp.src(paths.index)
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

// Run server
gulp.task('connect', connect.server({
  root: 'build',
  port: 9000,
  livereload: true,
  open: {
    browser: 'Google Chrome' // for OS X, else 'chrome'
  }
}));

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.index, ['index']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['styles', 'scripts', 'images', 'index', 'connect', 'watch']);
