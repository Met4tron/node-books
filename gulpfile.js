const path = require("path");
const gulp = require("gulp");
const babel = require("gulp-babel");
const del = require("del");
const eslint = require("gulp-eslint");
const nodemon = require("gulp-nodemon");
const paths = {
  js: ["src/**/*.js", "src/*.js", "!node_modules/**"],
  nonJs: ["./package.json", "."]
};

gulp.task("clean", () => {
  return del(["./build"]);
});

gulp.task("build", () => {
  gulp
    .src([...paths.js], { base: "." })
    .pipe(babel({ presets: ["airbnb"] }))
    .pipe(gulp.dest("build"));
});

gulp.task("lint", () => {
  return gulp
    .src(["src/**/*.js"])
    .pipe(
      eslint({
        fix: true
      })
    )
    .pipe(eslint.format());
});

gulp.task("nodemon", ["build"], () => {
  nodemon({
    script: path.join("build", "server.js"),
    ext: "js"
  });
});

gulp.task("watch", ["lint"], () => {});
