const yargs = require("yargs");
const gulp = require("gulp");
const connect = require("gulp-connect");

const root = yargs.argv.root || ".";
const port = yargs.argv.port || 8000;
const host = yargs.argv.host || "localhost";

gulp.task("reload", () => gulp.src(["*/*.html"]).pipe(connect.reload()));

gulp.task("serve", () => {
  connect.server({
    root: root,
    port: port,
    host: host,
    livereload: true,
  });

  gulp.watch(["*/*.html", "*/*.md", "*/*.css"], gulp.series("reload"));
});
