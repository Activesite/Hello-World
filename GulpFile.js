var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var babel = require("gulp-babel");
var sass = require('gulp-sass');

gulp.task("barbel", function () {
  return gulp.src("app/barbel/site.js")
    .pipe(babel())
    .pipe(gulp.dest("app/dist/js"));
});

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/dist/css'))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ['app'],
      index: "index.html",
         routes: {
        '/bower_components': 'bower_components'
         }
    },
  })
})
    
gulp.task('watch', ['browserSync'], function (){
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/barbel/site.js', ['barbel']);
  gulp.watch('app/scss/**/*.scss', ['sass']); 
});

