var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    gutil = require('gulp-util')

// CONFIGURATION
var scripts = {
    entry: './js/app.js',
    outputFile: 'app.bundle.js',
    outputDir: './public/dist/js'
}

var styles = {

}

gulp.task('build-styles', function () {

})

gulp.task('watch-styles', function () {

})

gulp.task('build-scripts', function () {
    var b = browserify([scripts.entry])
        .transform('babelify', {presets: ["es2015"]})
        .on('log', gutil.log)
        .bundle()
        .on('error', gutil.log)
        .pipe(source(scripts.outputFile))
        .pipe(gulp.dest(scripts.outputDir))
})

gulp.task('watch-scripts', function () {
    var b = browserify([scripts.entry])
        .on('log', gutil.log)
        .plugin([watchify])
        .transform('babelify', {presets: ["es2015"]})

    var bundle = function () {
        b.bundle()
            .on('error', gutil.log)
            .pipe(source(scripts.outputFile))
            .pipe(gulp.dest(scripts.outputDir))
    }
    b.on('update', bundle)
    bundle()
})

gulp.task('build', ['build-styles', 'build-scripts'])
gulp.task('watch', ['watch-styles', 'watch-scripts'])
gulp.task('default', ['build-scripts'])
