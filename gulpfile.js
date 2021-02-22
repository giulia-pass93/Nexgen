
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');

gulp.task('sass', function(){
    return gulp.src('app/scss/style.scss')
      .pipe(sass()) 
      .pipe(gulp.dest('app/css'))
  });
  
  gulp.task('watch', function () {    
    gulp.watch('app/scss/style.scss', gulp.series('sass'));
  });
