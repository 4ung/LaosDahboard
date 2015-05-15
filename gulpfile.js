var gulp=require('gulp');
var clean = require('gulp-clean');
var jshint=require('gulp-jshint');
var sass=require('gulp-sass');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var jade=require('gulp-jade');
var minifyCSS=require('gulp-minify-css');

var del=require('del');

var zip=require('gulp-zip');
var run_squence=require('run-sequence');

 



	var path={
		"manifestpath":"./src/*.manifest",
		"jspath":"./src/scripts/*.js",
		"fragmentjspath":"./src/scripts/fragments/*.js",
		"sasspath":"./src/styles/*.sass",
		"fragmentpath":"./src/html/fragments/*.jade",
		"mainindexpath":"./src/html/*.jade",
		"assets":"./src/assets/**/*"
	};

	gulp.task('clean',function(cb){
		console.log("Cleaning Build File..................");
		 return gulp.src('build/')
	 	.pipe(clean());
	});

	//Javascript
	gulp.task('Javascript',['clean'], function() {
	  gulp.src(path.jspath)
	    .pipe(jshint())
	    .pipe(uglify())
	    .pipe(gulp.dest('build/js/'))
	    .pipe(jshint.reporter('default'));
	});
	gulp.task('FragmentJavascript',['clean'], function() {
	  gulp.src(path.fragmentjspath)
	    .pipe(jshint())
	    .pipe(uglify())
	    .pipe(gulp.dest('build/js/fragments/'))
	    .pipe(jshint.reporter('default'));
	});
	//css 
	gulp.task('style',['clean'], function() {
	  gulp.src(path.sasspath)
	    .pipe(sass())
	    .pipe(minifyCSS())
	    .pipe(gulp.dest('build/css/'))
	    .pipe(jshint.reporter('default'));
	});

	//tab fragment
	gulp.task('fragments',['clean'],function(){
		gulp.src('./src/html/fragments/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('build/fragment/'))
		.pipe(jshint.reporter('default'));
	});
	//main html
	gulp.task('mainhtml',['clean'],function(){
		gulp.src('./src/html/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('build/'))
		.pipe(jshint.reporter('default'));
	});
	//manifst
	gulp.task('manifest',['clean'],function(){
		gulp.src('./src/*.manifest')
		
		.pipe(gulp.dest('build/'))
		.pipe(jshint.reporter('default'));
	});

	gulp.task('map-data',['clean'],function(){
		gulp.src('./src/map-data/*.*')	
		.pipe(gulp.dest('build/map-data/'))

		gulp.src('./src/map-data/overview-map/*.*')
		.pipe(gulp.dest('./build/map-data/overview-map/'))
		
		
	});

	gulp.task('assets',['clean'],function(){
		gulp.src(path.assets)
		.pipe(gulp.dest('build/assets/'));
	});


//serving local server


	gulp.task('zip',function(){
		console.log("Zip Created......................................................................................");
		return gulp.src('build/*')
			.pipe(zip('upload.zip'))
			.pipe(gulp.dest('build'));
	});





	gulp.task('default',function(){

		gulp.watch('./src/**/*.js',['Javascript']);
		gulp.watch(path.fragmentjspath,['FragmentJavascript']);

		//gulp.watch('./src/**/*.sass',['style']);
		gulp.watch('./src/**/*.jade',['fragments']);
		gulp.watch(path.mainindexpath,['mainhtml']);		      
		gulp.watch('./src/**/*.manifest',['manifest']);

	run_squence('clean','Javascript','FragmentJavascript','fragments','mainhtml','manifest','map-data','assets','zip',function(callBack){
		console.log(callBack);
	});

	console.log("Build Complete ..............");



	


});
