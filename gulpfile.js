var gulp = require('gulp');
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'docs'
    },
  })
});

gulp.task('sass', function() {
  return gulp.src('docs/scss/**/*.scss') // Gets all files ending with .scss in docs/scss
    .pipe(sass())
    .pipe(gulp.dest('docs/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('default', gulp.series('browserSync', 'sass'), function (){
  gulp.watch('docs/scss/**/*.scss', ['sass']);
  // Other watchers
});
