var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload');

var paths = {
    src: {
        styles: 'scss/*.scss',
        mainCss: 'scss/main.scss'
    },
    public: {
        styles: '../public/css'
    }
};

//compile scss
gulp.task('styles', function () {
    gulp.src(paths.src.mainCss)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write())
        .pipe(rename({basename: 'style',suffix: '.min'}))
        .pipe(gulp.dest(paths.public.styles))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(paths.src.styles, ['styles']);
});

gulp.task('default', ['styles', 'watch']);

