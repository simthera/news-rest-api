/**
 * Created by smetshile on 2018/02/27.
 */
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('styles/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('styles/css'))
});
gulp.task('watch', function(){
    gulp.watch('styles/**/*.scss', ['sass']);
    // Other watchers
});