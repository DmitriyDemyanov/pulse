const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        },
        browser: "Chrome"
    });
});

gulp.task('watch', function(){
    gulp.watch('src/sass/**/*.+(scss|sass)', gulp.parallel('styles'))
    gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('styles', function(){
    return gulp.src('src/sass/**/*.+(scss|sass)')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(rename({   
                prefix: "",
                suffix: ".min",
            }))
            .pipe(autoprefixer({
                cascade: false
            })) 
            .pipe(cleanCSS({compatibility: 'ie8'}))   
            .pipe(gulp.dest('src/css'))
            .pipe(gulp.dest("dist/css"))
            .pipe(browserSync.stream())
});

gulp.task('scripts', () => (
    gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"))
));

gulp.task('css', () => (
    gulp.src('src/css/**/*')
        .pipe(gulp.dest('dist/css'))
));

gulp.task('html', () => (
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
));

gulp.task('images', () => (
    gulp.src("src/img/**/*")
        .pipe(gulp.dest("dist/img"))
));

gulp.task('fonts', () => (
    gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"))
));

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'css'));

gulp.task('build', gulp.parallel('fonts', 'images', 'html', 'scripts', 'styles', 'css'));


