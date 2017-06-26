const gulp = require('gulp');
const Server = require('karma').Server;
const webdriver = require('gulp-webdriver');


gulp.task('test', function() {
  return gulp.src('wdio.conf.js').pipe(webdriver());
});
