const { src, dest, series, watch } = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const clean = require("gulp-clean");

function jsTask() {
  return src(["./math.js", "./main.js"])
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(dest("dist/"));
}

function cleanTask() {
  return src("dist", { allowEmpty: true }).pipe(clean());
}

function watchTask() {
  return watch(["./math.js", "./main.js"], { ignoreInitial: false }, series(cleanTask, jsTask))
}

exports.default = series(cleanTask, jsTask)
exports.jsTask = jsTask;
exports.cleanTask = cleanTask;
exports.watchTask = watchTask;

// yarn add XXXX OOOO
// npm i XXXX OOOO