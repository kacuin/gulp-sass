const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
    return src('res/scss/**/*.scss')
        .pipe(sass())
        .pipe(purgecss( {content: ['*.html']}))
        .pipe(dest('res/css'))
}

function watchStyles() {
    watch(['res/scss/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchStyles)