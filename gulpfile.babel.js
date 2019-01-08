import gulp from 'gulp';
import babel from 'gulp-babel';
import clean from 'gulp-clean';
import gutil from 'gulp-util';

gulp.task('default', ['build'], () => {
  gutil.log('S3 library is up and running');
});

// Gulp task for building the code into lib folder
gulp.task('build', ['transpiler'], () => {
  return gutil.log('Building of S3 library is complete');
});

// Gulp task for transpiling all ES6 code to ES5 and copy to lib folder.
gulp.task('transpiler', ['clean'], () => {
  return gulp.src('index.js')
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

// Gulp task to clean the lib folder
gulp.task('clean', () => {
  return gulp.src('lib', { read: false })
    .pipe(clean());
});
