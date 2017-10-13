var gulp = require('gulp')
var BS = require('browser-sync').create()
var reload = BS.reload

gulp.task('server:dev', function () {
    BS.init({
        server: {
            baseDir: 'src/',
            index: 'index.html'
        },
        port: 8080
    })

    gulp.watch('src/css/*.css', ['css:dev'])
    gulp.watch('src/js/*.js', ['js:dev'])
    gulp.watch('src/*.html', ['html:dev'])
})

gulp.task('css:dev', function () {
    gulp.src('src/css/*.css')
    .pipe(reload({
        stream: true
    }))
})

gulp.task('js:dev', function () {
    gulp.src('src/js/*.js')
    .pipe(reload({
        stream: true
    }))
})

gulp.task('html:dev', function () {
    gulp.src('src/*.html')
    .pipe(reload({
        stream: true
    }))
})
