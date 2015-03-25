
// Imports

var gulp = require('gulp'); 
var sass = require('gulp-sass');
var styleguide = require('sc5-styleguide');

// Path definitions

var sourcePath = 'src';
var htmlWild = sourcePath + '/**/*.html';
var styleSourcePath = sourcePath + '/styles';
var sassWild = styleSourcePath + '/**/*.scss';
var sassRoot = styleSourcePath + '/tutorial.scss';

var buildPath = 'build';
var styleBuildPath = buildPath + '/styles';

var tmpPath = 'tmp';
var styleguideTmpPath = tmpPath + '/styleguide';

// Building the actual site / app

gulp.task('html', function() {
    return gulp.src(htmlWild)
        .pipe(gulp.dest(buildPath));
});

gulp.task('sass', function() {
    return gulp.src(sassWild)
        .pipe(sass())
        .pipe(gulp.dest(styleBuildPath));
});

// Running styleguide

gulp.task('styleguide:generate', function() {
  return gulp.src(sassWild)
    .pipe(styleguide.generate({
        title: 'My First Styleguide',
        server: true,
        rootPath: styleguideTmpPath,
        overviewPath: 'README.md'
      }))
    .pipe(gulp.dest(styleguideTmpPath));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src(sassRoot)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(styleguideTmpPath));
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);

// Developer mode, with styleguide

gulp.task('dev', ['html', 'sass', 'styleguide'], function() {
    gulp.watch(htmlWild, ['html']);
    gulp.watch(sassWild, ['sass', 'styleguide']);
    console.log(
        '\nDeveloper mode!\n\nSC5 Styleguide available at http://localhost:3000/\n'
    );
});

// The basic build task, no styleguide

gulp.task('default', ['html', 'sass'], function() {
    console.log(
        '\nBuild complete!\n\nFresh build available in directory: ' +
        buildPath + '\n\nCheckout the build by commanding\n' +
        '(cd ' + buildPath + '; python -m SimpleHTTPServer)\n' +
        'and pointing yout browser at http://localhost:8000/\n\n' +
        'Run gulp with "gulp dev" for developer mode!\n'
    );
});

