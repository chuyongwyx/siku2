//请求插件
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const  cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');


gulp.task('js',function(){
			gulp.src('./src/js/*.js').pipe(rename({"suffix":".min"})).pipe(uglify()).pipe(gulp.dest('./src/gulpmin/js'));
		})

gulp.task('sass',()=>{
			gulp.src('./src/sass/*.scss')
			.pipe(sass())
			.pipe(cssnano())
			.pipe(rename({"suffix":".min"}))
			.pipe(gulp.dest('./src/gulpmin/css'));
	})

gulp.task('minimg',function(){
		gulp.src('./src/image/*.*')
		.pipe( imagemin())
		.pipe(gulp.dest('./dist/image'));
})

gulp.task('default',function(){
		gulp.watch('./src/js/*.js',['js']);
		gulp.watch('./src/sass/*.scss',['sass']);
		gulp.watch('./src/image/*.*',['minimg'])
})
