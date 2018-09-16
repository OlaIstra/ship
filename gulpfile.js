const gulp = require('gulp'),
	  htmlhint = require("gulp-htmlhint"),
	  csso = require('gulp-csso');

gulp.task('csso', function () {
    return gulp.src('app/index.css')
        .pipe(csso())
        .pipe(gulp.dest('dest'));
});

gulp.task('development', function () {
    return gulp.src('app/index.css')
        .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
        .pipe(gulp.dest('dest'));
});

gulp.task('htmlo', function () {
    return gulp.src("app/index.html")
			.pipe(htmlhint())
			.pipe(gulp.dest('dest'));
});