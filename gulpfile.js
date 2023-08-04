const yargs = require("yargs");
const gulp = require("gulp");
const connect = require("gulp-connect");
const exec = require("gulp-exec");

const root = yargs.argv.root || ".";
const port = yargs.argv.port || 8000;
const host = yargs.argv.host || "localhost";

gulp.task(
  "reload",
  () => gulp.src(["*/*.html"]).pipe(connect.reload())
);

gulp.task("compile_latex", () => {
  var options = {
    continueOnError: false,
    pipeStdout: false,
  };
  var reportOptions = {
    err: true,
    stderr: true,
    stdout: true,
  };
  return gulp.src("*/img/**/__latex_*.tex")
    .pipe(exec(file => `latexmk -cd -bibtex- -pdf ${file.path}`, options))
    .pipe(exec(file => `latexmk -cd -c ${file.path}`, options))
    .pipe(exec(file => `pdf2svg ${file.path.slice(0, -4)}.pdf ${file.path.slice(0, -4)}.svg`, options))
    .pipe(exec.reporter(reportOptions));
});

gulp.task(
  "serve",
  () => {
    connect.server({
      root: root,
      port: port,
      host: host,
      livereload: true,
    });

    gulp.watch("*/img/**/*.tex", gulp.series("compile_latex", "reload"));
    gulp.watch(["*/*.html", "*/*.md", "*/*.css"], gulp.series("reload"));
  }
);
