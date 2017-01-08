import bs from 'browser-sync'
import compression from 'compression'

var browserSync = bs.create()

browserSync.init({
  server: 'dist',
  open: true,
  logFileChanges: false,
  middleware: [
    compression()
  ],
  plugins: ['bs-fullscreen-message'],
  files: [
    'app/css/*.css',
    'app/*.html'
  ]
})
