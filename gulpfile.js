// Importa o Gulp e os plugins necessários
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const image = require("gulp-image");
const uglify = require("gulp-uglify");

// Tarefa para compilar o SASS
gulp.task("sass", function () {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
});

// Tarefa para comprimir as imagens
gulp.task("image", function () {
  return gulp
    .src("src/images/*")
    .pipe(
      image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
        quiet: true,
      })
    )
    .pipe(gulp.dest("dist/images"));
});

// Tarefa para comprimir o JavaScript
gulp.task("uglify", function () {
  return gulp.src("src/js/*.js").pipe(uglify()).pipe(gulp.dest("dist/js"));
});

// Tarefa padrão que executa todas as tarefas
gulp.task("default", gulp.parallel("sass", "image", "uglify"));
