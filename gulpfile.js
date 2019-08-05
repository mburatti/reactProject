"use strict"

var gulp = require("gulp");
var conn = require("gulp-connect");
var open = require("gulp-open");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var contact  =require("gulp-concat");
var lint = require("gulp-eslint");

var config = {
    port: 5500,
    baseUrl: "http://localhost",
    paths: {
        html: "./src/*.html",
        dist: "./dist",
        js: "./src/**/*.js",
        indexJs: "./src/index.js",
        css: "./node_modules/bootstrap/dist/css/bootstrap.css"
    }
}

gulp.task("conn", function(){
    conn.server({
        root:["dist"],
        port: config.port,
        base: config.baseUrl,
        livereload: true
    });
});

gulp.task("open", ["conn"], function(){
    gulp.src("dist/index.html")
    .pipe(open({uri: config.baseUrl + ":" + config.port + "/"}));
});

gulp.task("html", function(){
    gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(conn.reload());
});

gulp.task("js", function(){
    browserify(config.paths.indexJs)
    .transform(reactify)
    .bundle()
    .on("error", console.error.bind(console))
    .pipe(source("bundle.js"))
    .pipe(gulp.dest(config.paths.dist+"/js"))
    .pipe(conn.reload());
});

gulp.task("watch", function(){
    gulp.watch(config.paths.html, ["html"]);
    gulp.watch(config.paths.js, ["js", "lint"]);
});

gulp.task("css", function(){
    gulp.src(config.paths.css)
    .pipe(contact("bundle.css"))
    .pipe(gulp.dest(config.paths.dist + "/css"))
});

gulp.task("lint", function(){
    return gulp.src(config.paths.js)
    .pipe(lint({config: ".eslintrc.json"}))
    .pipe(lint.format());
});

gulp.task("default", ["html", "js", "css", "lint", "open", "watch"]);