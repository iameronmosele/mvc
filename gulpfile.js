var gulp = require("gulp"),
  php = require("gulp-connect-php"),
  browserSync = require("browser-sync");

var reload = browserSync.reload;

gulp.task("php", function() {
  php.server({ base: "build", port: 8010, keepalive: true });
});
gulp.task("browser-sync", ["php"], function() {
  browserSync({
    proxy: "mvc.valet",
    open: true,
    port: 8080,
    notify: false
  });
});
gulp.task("default", ["browser-sync"], function() {
  gulp.watch(["*.php"], [reload]);
});
