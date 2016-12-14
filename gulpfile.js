var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");

gulp.task("default", function(){
    var result = browserify({
        basedir: "./scripts",
        debug: true,
        entries: ["index.tsx"],
        cache: {},
        packageCache: {}
    })
    .plugin("tsify")
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest(""));

    return result;
});