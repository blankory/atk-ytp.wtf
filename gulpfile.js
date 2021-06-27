const gulp = require('gulp');
const { src, dest, watch, task, series } = require('gulp');
const pug = require('gulp-pug');
var sass = require('gulp-sass')(require('sass'));

task('watch', function(){
   watch('./*.pug', series('pugToHtml'));
   watch('./scss/**/*.scss', series('styles'));
});

task('pugToHtml', function(){
   return src('./*.pug')
   .pipe(pug({
         //options
      }))
      .pipe(dest('./dist'));
});

task('build', async function(){
   gulp.src('./*.pug')
   .pipe(pug({
         //options
      }))
      .pipe(dest('./dist'));
   generateCss();
});

/* SCSS */ 
async function generateCss(){
    gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
}

gulp.task('styles', generateCss);

