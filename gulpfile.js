"use strict"
var gulp = require('gulp');
var gulp = require('gulp-connect')
var gulp = require('gulp-open')

var config = {
    port : 5500,
    baseUrl = 'http://localhost',
    paths = {
        html = './src/*.html'
        dist = './dist'
    }
}

gulp.task('conn', function(){
    continue.server({
        root:['dist'],
        port: config.port,
        base: config.baseUrl,
        livereload: true
    });
});

gulp.task('open', ['conn'], function(){
    gulp.src('dist/index.html').pipe(open({uri: config,baseUrl + ':' + config.port + '/'}))
});