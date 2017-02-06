import './mithrilSetup'
import webpack from 'webpack'
import path from 'path'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from '../webpack.config.dev'
import csshook from 'css-modules-require-hook/preset'
import express from 'express'
import routes from '../src/routes'
import render from './render'

const port = 3000
const app = express()

const compiler = webpack(config);

var webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, {
  compress: true,
  publicPath: config.output.publicPath
})

app.use(webpackDevMiddlewareInstance);

webpackDevMiddlewareInstance.waitUntilValid(() => {

  function getHtml () {
    return webpackDevMiddlewareInstance.fileSystem.readFileSync(path.join(compiler.outputPath,'index.html')).toString()
  }

  app.use(render({
    html: getHtml,
    routes: routes
  }))

  app.listen(port, function(err) {
    if (err) {
      console.log(err);
    }
  })
})




