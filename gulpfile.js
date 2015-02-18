var gulp = require('gulp')
var jade = require('gulp-jade')
var stylus = require('gulp-stylus')


gulp.task('jade', function(){
	return gulp.src('src/jade/index.jade')
	.pipe(jade())
	.pipe(gulp.dest('build'))
})

gulp.task('stylus', function(){
	return gulp.src('src/stylus/style.styl')
	.pipe(stylus())
	.pipe(gulp.dest('build/css'))
})