var gulp = require('gulp');
var htmlImport = require('gulp-html-import');

gulp.task('import', function () {
  return gulp.src('./*.html')
    .pipe(htmlImport('./components/'))
    .pipe(gulp.dest('dist')); 
})

gulp.task('move-files', function() {
  return gulp.src('./app.js')
    .pipe(gulp.dest('dist'))
})