
const { src, dest, watch, task, series } = require('gulp');
const pug = require('gulp-pug');

task('watch', function(){
   watch('./*.pug', series('pugToHtml'));
});

task('pugToHtml', function(){
   return src('./*.pug')
   .pipe(pug({
         //options
      }))
      .pipe(dest('./dist'));
  });

  task('build', function(){
   return src('./*.pug')
   .pipe(pug({
         //options
      }))
      .pipe(dest('./dist'));
  });



