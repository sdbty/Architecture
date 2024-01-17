import gulp from "gulp";
import autoPrefixer from "gulp-autoprefixer";
import gcmq from "gulp-group-css-media-queries";
import csso from "gulp-csso";
import rename from "gulp-rename";
import less from "gulp-less";
import sourcemaps from "gulp-sourcemaps";

gulp.task("la", pa);
function pa() {
    gulp.src("./precss/style.less")
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoPrefixer({
            cascade: true,
            browsers: ["last 10 versions"]
        }))
        .pipe(gcmq())
        .pipe(gulp.dest("./css/"))
        .pipe(csso())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./css/"))
}


gulp.task("default" , gulp.parallel("la"))






