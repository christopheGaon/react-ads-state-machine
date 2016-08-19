var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
/**
 * compress for production env
 * TODO: optimize framework externalise some js in vendors , gzip for compression
 */
gulp.task('compress', function () {
    /**
     * gestion des erreur sur les modules gulp executés
     * @param name name of the gulp module having error
     * @returns {Function}
     */
    function createErrorHandler(name) {
        return function (err) {
            console.error('Error from ' + name + ' in compress task', err.toString());
        };
    }

    /**
     * browserify task
     * main class app.jsx using ES6 and react
     * using babelify to transcompile in js
     * using uglify to minimise the code for production
     *
     */
    return browserify({entries: './src/app.jsx', extensions: ['.jsx'], debug: false})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(streamify(uglify()))
        .on('error', createErrorHandler('uglify'))
        .pipe(gulp.dest('dist'))
        .on('error', function(err) {
            console.error('Error in compress task', err.toString());
        });
})
/**
 * build task using in dev env
 * browserify app.jsx
 * babelify for transcompile jsx in js
 * bundle in dist/bundle.js
 */
gulp.task('build', function () {
    return browserify({entries:'./src/app.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

/**
 * watch task using build task on src/*.jsx
 */
gulp.task('watch', ['build'], function () {
gulp.watch('./src/*.jsx', ['build']);
});
/**
 * using gulp launch watch task
 */
gulp.task('default', ['watch']);