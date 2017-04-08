    var gulp = require('gulp'),
     postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
     cssvars = require('postcss-simple-vars'),
      nested = require('postcss-nested'),
   cssImport = require('postcss-import');



gulp.task('styles', function() {
  $args = [cssImport, cssvars, nested, autoprefixer];

  return gulp.src('./app/assets/styles/styles.css')


    .pipe(postcss($args))
      // Error Handling
      .on('error', function(errorInfo) {
        console.log(errorInfo.toString());
        this.emit('end');
      })
    .pipe(gulp.dest('./app/temp/styles'));

});
