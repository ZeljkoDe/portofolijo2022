const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

async function compile_scss() {
	return gulp.src('style/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./'))
		.pipe(browserSync.stream());
};

async function watch() {
	browserSync.init({
		server: "./"
	});
	gulp.watch('style/**/*.scss', compile_scss);
	gulp.watch("*.html").on('change', browserSync.reload);
	gulp.watch("js/*.js").on('change', browserSync.reload);
};

exports.compile_scss = compile_scss;
exports.watch = watch;