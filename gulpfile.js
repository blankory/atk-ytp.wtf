const gulp = require('gulp');
const { src, dest, watch, task, series } = require('gulp');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass')(require('sass'));
var replace = require('gulp-replace');

/**
  Monitors changes of files in codebase.
  Triggers related tasks when certain files are being edited, see functions below.
*/
task('watch', function(){
   watch('./*.pug', series('build'));
   watch('./scss/**/*.scss', series('build'));
});

/**
  Pipes all related tasks for building the project for it's end state.
*/
task('build', async function(){
  generateCss();
  pugToHtml();
});

/**
  Generates CSS formatted files from SCSS.
*/ 
async function generateCss(){
    gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/css/'));
}
gulp.task('styles', generateCss);

async function pugToHtml(){
   return src('./*.pug')
     .pipe(replace(/d\=cachebuster/g, 'd=' + new Date().getTime()))
     .pipe(pug({
         //options
      }))
     .pipe(dest('./dist'));
}
