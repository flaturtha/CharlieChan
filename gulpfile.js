var gulp                = require('gulp');
var browserSync         = require('browser-sync');
var sass                = require('gulp-sass');
var prefix              = require('gulp-autoprefixer');
var cleanCSS            = require('gulp-clean-css');
var concat              = require('gulp-concat');
var uglify              = require('gulp-uglify');
// var pump                = require('pump');
// var imagemin            = require('gulp-imagemin');
var cp                  = require('child_process');

var jekyll              = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages            = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
 gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
  .on('close', done);
});

/**
 * IMAGEMIN
 */
gulp.task('imgmin', () =>
  gulp.src('_assets/img/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('assets/img'))
);

/**
 * JS stuff
 */
gulp.task('jsconcat', function () {
  return gulp.src('_assets/js/**/*.*')
    .pipe(concat('scripts.js'))
    .pipe(uglify('scripts.js'))
    .pipe(gulp.dest('assets/js'));
});



/**
* Copy
*/

gulp.task('copyimg', function () {
  gulp.src('_assets/img/**/*.*')
  .pipe(gulp.dest('assets/img'));
});

// gulp.task('copyjs', function () {
//   gulp.src('_assets/js/**/*.*')
//   .pipe(gulp.dest('assets/js'));
// });


/**
 * Rebuild Jekyll & do page reload
 */
 gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
 gulp.task('browser-sync', ['sass', 'copyimg', 'jsconcat', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
 gulp.task('sass', function () {
  return gulp.src('_assets/scss/styles.scss')
  .pipe(sass({
    includePaths: ['css'],
    onError: browserSync.notify
  }))
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('assets/css'))
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest('assets/css'));
});




/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
 gulp.task('watch', function () {
  gulp.watch('_assets/**/*.scss', ['sass']);
  gulp.watch(['*.html', '_includes/*', '_layouts/*.html', '_pages/*', '_posts/*', '_short-stories/*', '_novellas/*', '_novels/*', '_the-red-file/*', '_murderwiki/*'], ['jekyll-rebuild']);
});



/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
 gulp.task('default', ['browser-sync', 'watch']);
