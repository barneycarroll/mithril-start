import bs from 'browser-sync'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import stripAnsi from 'strip-ansi'
import compression from 'compression'

import webpackConfig from '../webpack.config.dev.js'
var bundler = webpack(webpackConfig)
var browserSync = bs.create()

bundler.plugin('done', function (stats) {
  if (stats.hasErrors() || stats.hasWarnings()) {
    return browserSync.sockets.emit('fullscreen:message', {
      title: 'Webpack Error:',
      body: stripAnsi(stats.toString()),
      timeout: 100000
    })
  }
  browserSync.reload()
})

browserSync.init({
  server: 'dist',
  open: true,
  logFileChanges: false,
  middleware: [
    compression(),
    webpackDevMiddleware(bundler, {
      publicPath: webpackConfig.output.publicPath,
      stats: {colors: true}
    })
  ],
  plugins: ['bs-fullscreen-message'],
  files: [
    'app/css/*.css',
    'app/*.html'
  ]
})
