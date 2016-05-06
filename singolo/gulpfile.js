var gulp = require('gulp'),
	  sass = require('gulp-ruby-sass'),
	  autoprefixer = require('gulp-autoprefixer'),
	  browserSync = require('browser-sync').create(),
	  jade = require('gulp-jade'),
	  spritesmith  = require('gulp.spritesmith'),
    prettify = require('gulp-prettify'),
    uncss = require('gulp-uncss');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir:'./'
        }
    });
});

// Compiling SASS to CSS 
gulp.task('styles', function () {
  return sass('assets/sass/main.sass',
  	{noCache: true}
  	)
    .on('error', sass.logError)
  .pipe(autoprefixer({
    browsers: ['last 3 versions','> 5%'],
    cascade: false
  }))
    .pipe(gulp.dest('assets/css/'))
    .pipe(browserSync.stream());

});
//Cleaning CSS
gulp.task('default', function () {
    return gulp.src('./assets/css/main.css')
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(gulp.dest('./assets/css'));
});

//HTML 
gulp.task('templates', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./*.jade')
    .pipe(jade({
      pretty: true,
      locals: YOUR_LOCALS
    }))
     .pipe(prettify({
      unformatted: []
    }))
    .pipe(gulp.dest('./'))
});

//Sprites
gulp.task('sprite', function () {
  var spriteData = gulp.src('assets/img/icons/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.sass',
    imgPath: '/assets/img/sprite.png' 
  }));
  spriteData.css.pipe(gulp.dest('./assets/sass/1-tools'));
  spriteData.img.pipe(gulp.dest('./assets/img/'));  
});

//Default task
gulp.task('default', ['styles', 'watch', 'browser-sync', 'templates']);

gulp.task('watch', function(){
	gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('*/*.js').on('change', browserSync.reload);
	gulp.watch('*.jade').on('change', browserSync.reload);
	gulp.watch('*.css').on('change', browserSync.reload);
	gulp.watch('assets/sass/**/*.sass', ['styles']);
	gulp.watch('*.jade', ['templates']);
})