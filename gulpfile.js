const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

async function compile_scss() {
	return gulp.src('style/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./'));
};

async function watch_scss() {
	gulp.watch('style/**/*.scss', compile_scss);
}

exports.default = compile_scss;
exports.watch_scss = watch_scss;