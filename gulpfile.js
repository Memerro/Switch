var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default,
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin');

function serve(done) {
  browserSync.init({
    server: {
      baseDir: "app"
    },
    port: 3000
  });
  done();
}

function servereload(done) {
  browserSync.reload();
  done();
}

function js() {
	return gulp.src([
			'app/libs/jquery/*.js',
			'app/libs/slick/*.js',
			'app/js/main.js'
		]) 
	.pipe(uglify())
	.pipe(concat('common.min.js'))
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.stream());
}

function css() {
    return gulp.src('app/sass/main.sass')
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
}

function watchfiles() {
  gulp.watch('app/sass/**/*.sass', gulp.series(css, servereload));
  gulp.watch("app/*.html", gulp.series(css, servereload));
	gulp.watch('app/js/*.js', gulp.series(js, servereload));
}

 function images() {
	return gulp.src('app/img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
}

gulp.task("images", images);
gulp.task("css", css);
gulp.task("js", js);
gulp.task("servereload", servereload);
gulp.task("default", gulp.parallel(watchfiles, serve));

gulp.task('build', gulp.series(js, css, images), function() {
    var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	var buildCss = gulp.src('app/css/main.min.css')
		.pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src('app/js/common.min.js')
		.pipe(gulp.dest('dist/js'));
     
    var buildHtml = gulp.src('app/html/**/*html')
		.pipe(gulp.dest('dist'))	
});

