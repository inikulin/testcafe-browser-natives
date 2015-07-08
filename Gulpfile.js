var gulp   = require('gulp');
var babel  = require('gulp-babel');
var eslint = require('gulp-eslint');
var del    = require('del');

gulp.task('clean', function (cb) {
    del('lib', cb);
});

gulp.task('build', ['clean'], function () {
    return gulp
        .src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('lib'));
});

gulp.task('lint', function () {
    return gulp
        .src([
            'src/**/*.js',
            'Gulpfile.js'
        ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
