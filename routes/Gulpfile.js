const gulp = require('gulp')
const karma = require('gulp-karma')
const gulpWebpack = require('gulp-webpack')
const testFiles = [
  'dist/*.js'
];

gulp.task('jasmineTest', function() {
  // Be sure to return the stream
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }))
});

gulp.task('webpack', function() {
  return gulp.src('test/test.js')
    .pipe(gulpWebpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['webpack', 'jasmineTest']);
