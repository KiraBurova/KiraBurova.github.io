var gulp = require('gulp'),
	  sass = require('gulp-ruby-sass'),
	  autoprefixer = require('gulp-autoprefixer'),
	  browserSync = require('browser-sync').create(),
	  pug = require('gulp-pug'),
	  spritesmith  = require('gulp.spritesmith'),
    prettify = require('gulp-prettify'),
    uncss = require('gulp-uncss');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir:'./',
            reloadDelay: 1000
        }
    });
});

// Compiling SASS to CSS 
gulp.task('styles', function () {
  return sass('sass/style.sass',
  	{noCache: true}
  	)
    .on('error', sass.logError)
  .pipe(autoprefixer({
    browsers: ['last 3 versions','> 5%'],
    cascade: false
  }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());

});
//Cleaning CSS
gulp.task('default', function () {
    return gulp.src('./css/style.css')
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(gulp.dest('./css'));
});

//HTML 
gulp.task('templates', function buildHTML() {
  var YOUR_LOCALS = {};
 
  return gulp.src('./*.pug')
    .pipe(pug({
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
  var spriteData = gulp.src('img/icons/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.sass',
    imgPath: '/img/sprite.png' 
  }));
  spriteData.css.pipe(gulp.dest('./sass/'));
  spriteData.img.pipe(gulp.dest('./img/'));  
});

//Default task
gulp.task('default', ['styles', 'watch', 'browser-sync', 'templates']);

gulp.task('watch', function(){
	gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('*/*.js').on('change', browserSync.reload);
	gulp.watch('*.pug').on('change', browserSync.reload);
	gulp.watch('css/*.css').on('change', browserSync.reload);
	gulp.watch('sass/*.sass', ['styles']);
	gulp.watch('*.pug', ['templates']);
})