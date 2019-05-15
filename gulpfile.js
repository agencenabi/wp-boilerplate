var gulp  = require( 'gulp' ),

	// CSS related
	sass         = require( 'gulp-sass' ),
	autoprefixer = require( 'gulp-autoprefixer' ),
	mmq          = require( 'gulp-merge-media-queries' ),
	minifycss    = require( 'gulp-uglifycss' ),
	sourcemaps	 = require( 'gulp-sourcemaps' ),
	filter 		 = require( 'gulp-filter' ),

	// JS related
	concat = require( 'gulp-concat' ),
	uglify = require( 'gulp-uglify' ),

	// Others
	rename  = require( 'gulp-rename' ),
	notify  = require( 'gulp-notify' ),
	plumber = require( 'gulp-plumber' );
	svgSprite = require( 'gulp-svg-sprite' ),

// Default Gulp task
gulp.task( 'default', ['front-css', 'inline-css', 'admin-css', 'functions-js', 'vendor-js', 'svg-sprite'], function() {

});

// Watch task
gulp.task( 'watch', ['front-css', 'inline-css', 'admin-css', 'functions-js', 'vendor-js', 'svg-sprite'], function() {
	// Styles
	gulp.watch( ['assets/src/scss/**/*.scss'], ['front-css'] );
	gulp.watch( ['assets/src/scss/**/*.scss'], ['inline-css'] );
	gulp.watch( ['assets/src/scss/**/*.scss'], ['admin-css'] );

	// Scripts
	gulp.watch( ['assets/src/js/modules/*.js'], ['functions-js'] );
	gulp.watch( ['assets/src/js/vendor/*.js'], ['vendor-js'] );
	
	// SVG
	gulp.watch( ['assets/src/svg/*.svg'], ['svg-sprite'] );
});

// Styles task
gulp.task( 'front-css', function() {
	return  gulp.src( 'assets/src/scss/main.scss' )
				.pipe( plumber({ errorHandler: notify.onError( 'Error: <%= error.message %>' ) }) )
				.pipe( sourcemaps.init() )
				.pipe( sass({
					errLogToConsole: true,
					//outputStyle: 'compressed',
					//outputStyle: 'compact',
					//outputStyle: 'nested',
					outputStyle: 'expanded',
					precision: 10
				}) )
				.pipe( sourcemaps.write({ includeContent: false }) )
				.pipe( sourcemaps.init({ loadMaps: true }) )
				.pipe( autoprefixer( {
					browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
				}) )
				.pipe( sourcemaps.write('.') )
				.pipe( plumber.stop() )
				.pipe( filter( '**/*.css' ) )
				.pipe( mmq({
					log: true
				}) )
				.pipe( rename( 'style.css' ) )
				.pipe( gulp.dest( 'assets/dist/css' ) )
				.pipe( rename({ suffix: '.min' }) )
				.pipe( minifycss({
					maxLineLen: 0,
					uglyComments: true
				}) )
				.pipe( gulp.dest( 'assets/dist/css' ) );
});

gulp.task( 'inline-css', function() {
	return  gulp.src( 'assets/src/scss/inline.scss' )
				.pipe( plumber({ errorHandler: notify.onError( 'Error: <%= error.message %>' ) }) )
				.pipe( sourcemaps.init() )
				.pipe( sass({
					errLogToConsole: true,
					//outputStyle: 'compressed',
					//outputStyle: 'compact',
					//outputStyle: 'nested',
					outputStyle: 'expanded',
					precision: 10
				}) )
				.pipe( sourcemaps.write({ includeContent: false }) )
				.pipe( sourcemaps.init({ loadMaps: true }) )
				.pipe( autoprefixer( {
					browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
				}) )
				.pipe( sourcemaps.write('.') )
				.pipe( plumber.stop() )
				.pipe( filter( '**/*.css' ) )
				.pipe( mmq({
					log: true
				}) )
				.pipe( rename( 'inline.css' ) )
				.pipe( gulp.dest( 'assets/dist/css' ) )
				.pipe( rename({ suffix: '.min' }) )
				.pipe( minifycss({
					maxLineLen: 0,
					uglyComments: true
				}) )
				.pipe( gulp.dest( 'assets/dist/css' ) );
});

gulp.task( 'admin-css', function() {
	return  gulp.src( 'assets/src/scss/admin.scss' )
				.pipe( plumber({ errorHandler: notify.onError( 'Error: <%= error.message %>' ) }) )
				.pipe( sourcemaps.init() )
				.pipe( sass({
					errLogToConsole: true,
					//outputStyle: 'compressed',
					//outputStyle: 'compact',
					//outputStyle: 'nested',
					outputStyle: 'expanded',
					precision: 10
				}) )
				.pipe( sourcemaps.write({ includeContent: false }) )
				.pipe( sourcemaps.init({ loadMaps: true }) )
				.pipe( autoprefixer( {
					browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
				}) )
				.pipe( sourcemaps.write('.') )
				.pipe( plumber.stop() )
				.pipe( filter( '**/*.css' ) )
				.pipe( mmq({
					log: true
				}) )
				.pipe( rename( 'admin.css' ) )
				.pipe( gulp.dest( 'assets/dist/css' ) )
				.pipe( rename({ suffix: '.min' }) )
				.pipe( minifycss({
					maxLineLen: 0,
					uglyComments: true
				}) )
				.pipe( gulp.dest( 'assets/dist/css' ) );
});

// Scripts task
gulp.task( 'functions-js', function() {
	return  gulp.src( 'assets/src/js/modules/*.js' )
				.pipe( sourcemaps.init() )
				.pipe( concat( 'functions.js' ) )
				.pipe( sourcemaps.write() )
				.pipe( gulp.dest( 'assets/dist/js' ) )
				.pipe( uglify() )
				.pipe( rename({ suffix: '.min' }) )
				.pipe( gulp.dest( 'assets/dist/js' ) );
});

gulp.task( 'vendor-js', function() {
	return  gulp.src( 'assets/src/js/vendor/*.js' )
				.pipe( sourcemaps.init() )
				.pipe( concat( 'vendor.js' ) )
				.pipe( sourcemaps.write() )
				.pipe( gulp.dest( 'assets/dist/js' ) )
				.pipe( uglify() )
				.pipe( rename({ suffix: '.min' }) )
				.pipe( gulp.dest( 'assets/dist/js' ) );
});

// SVG sprite task
gulp.task( 'svg-sprite', function() {
    return  gulp.src( 'assets/src/svg/*.svg' )
                .pipe( svgSprite({
                    mode : {
                        defs : true
                    }
                }) )
                .pipe( rename( 'icons.svg' ) )
                .pipe( gulp.dest( 'assets/dist/img' ) );
});
