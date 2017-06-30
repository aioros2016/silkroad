var gulp         = require('gulp');
var less         = require('gulp-less');
var browserSync  = require('browser-sync').create();
var useref       = require('gulp-useref');
var utf8Convert  = require('gulp-utf8-convert');
var uglify       = require('gulp-uglify');
var ngAnnotate   = require('gulp-ng-annotate');
var gulpIf       = require('gulp-if');
var cleanCSS     = require('gulp-clean-css');
var concat       = require('gulp-concat');
var tinypng      = require('gulp-tinypng-compress');
var htmlmin      = require('gulp-htmlmin');
var rev          = require('gulp-rev');    
var revCollector = require('gulp-rev-collector');
var runSequence  = require('run-sequence');


// 静态服务器 + 监听 less/html 文件
gulp.task('browserSync', ['less'], function() {
    browserSync.init({
        server: "./src"
    });
});

// less编译后的css将注入到浏览器里实现更新
gulp.task('less', function() {
    return gulp.src("src/less/*.less")
        .pipe(less())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.reload({
        		stream: true
        }));
});

gulp.task('watch', function (){
	gulp.watch('src/less/**/*.less', ['less']);
	gulp.watch("./src/**/*.*").on('change', browserSync.reload);
});

//gulp.task('convert',function() {
//  gulp.src('src/**/*.aspx')
//      .pipe(utf8Convert({
//          encNotMatchHandle:function (file) {
//              console.log(file + "编码不正确");
//          }
//      }))
//      .pipe(gulp.dest('src'));
//});

gulp.task('docmin', function(){
	return gulp.src(['src/**/*.html', 'src/**/*.aspx'])
		.pipe(useref())
		.pipe(gulp.dest('dist'))
});

gulp.task('cssmin', function () {
    gulp.src('dist/css/style.min.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('ngmin', function () {
    return gulp.src('src/**/*.js')
        .pipe(ngAnnotate({single_quotes: true}))
        .pipe(gulp.dest('src'));
});

gulp.task('jsmin', function () {
    gulp.src(['dist/controllers/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist/controllers'))
});

gulp.task('revCss', function(){
	return gulp.src('dist/css/*.css')
		.pipe(rev())
		.pipe(rev.manifest())
		.pipe(gulp.dest('rev/css'));
});

gulp.task('revJs', function(){
	return gulp.src(['dist/controllers/*.js'])
		.pipe(rev())
		.pipe(rev.manifest())
		.pipe(gulp.dest('rev/js'));
});

gulp.task('revImg', function(){
    return gulp.src(['dist/images/**/*.png', 'dist/images/**/*.jpg'])
        .pipe(rev())
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/images'));
});

gulp.task('revHtml', function(){
	return gulp.src(['rev/**/*.json', 'dist/**/*.html'])  /*WEB-INF/views是本地html文件的路径，可自行配置*/
		.pipe(revCollector())
		.pipe(gulp.dest('dist'));  /*Html更换css、js文件版本,WEB-INF/views也是和本地html文件的路径一致*/
});

gulp.task('revCollectorCss', function () {
    return gulp.src(['rev/**/*.json', 'dist/css/style.min.css'])
        .pipe(revCollector())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('revCollectorJs', function () {
    return gulp.src(['rev/**/*.json', 'dist/controllers/*.js'])
        .pipe(revCollector())
        .pipe(gulp.dest('dist/controllers'));
});

gulp.task('htmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('dist/**/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'));
});

gulp.task('tinypng', function () {
    gulp.src('src/images/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'oKb-b0B22hBZ5vSc0y86ywzmIj6Xvxpd',
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('dist/images'));
})

gulp.task('build', function (callback) {
	runSequence('less', 'ngmin', 'docmin', 'cssmin', 'jsmin', 'htmlmin',
	    callback
	)
})

gulp.task('rev', function (callback) {
	condition = false;
	runSequence('revCss', 'revJs', 'revImg', 'revHtml', 'revCollectorCss', 'revCollectorJs',
	    callback
	)
})

gulp.task('default', function (callback) {
	runSequence(['less','browserSync'], 'watch',
    	callback
	)
})