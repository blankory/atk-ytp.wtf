const gulp = require('gulp');
const { src, dest, watch, task, series } = require('gulp');
const pug = require('gulp-pug');
var sass = require('gulp-sass')(require('sass'));

/**
  Monitors changes of files in codebase.
  Triggers related tasks when certain files are being edited, see functions below.
*/
task('watch', function(){
   watch('./*.pug', series('pugToHtml'));
   watch('./scss/**/*.scss', series('styles'));
});

/**
  Converts files with Pug syntax to HTML format.
*/
task('pugToHtml', function(){
   return src('./*.pug')
   .pipe(pug({
         //options
      }))
      .pipe(dest('./dist'));
});

/**
  Pipes all related tasks for building the project for it's end state.
*/
task('build', async function(){
   gulp.src('./*.pug')
   .pipe(pug({
         //options
      }))
      .pipe(dest('./dist'));
   generateCss();
});

/**
  Generates CSS formatted files from SCSS.
*/ 
async function generateCss(){
    gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
}
gulp.task('styles', generateCss);

