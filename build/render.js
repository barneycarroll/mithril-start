import express from 'express'
import m from 'mithril'
import webpack from 'webpack'
import jsdom from 'jsdom'
import path from 'path'
import mithrilNodeRender from 'mithril-node-render'
import config from '../webpack.config.dev'

const app = express()
global.m = m

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

function createDocument(callback){
  var filename = path.join(compiler.outputPath,'index.html');
  return compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return err;
    }

    return jsdom.env({
      html: result,
      done: callback
    })
  })
}

module.exports = function ({routes}) {
  Object.keys(routes).forEach(route => {
    const resolver = routes[route]
    app.get(route, (req, res, next) => {
      res.type('html')

      const attrs = {
        title: null,
        description: null
      }


      Promise.resolve()
      .then(() => resolver.onmatch(req.params, req.url))
      .then(() => {
        var component = resolver.render({attrs: req.params})
        return component;
      })

      .then(function(component){
        return mithrilNodeRender(component, attrs)
        .then((html) => {
          createDocument((err, window) => {
            if (resolver.title){
              window.document.title = resolver.title
            }
            if (resolver.description){
              var meta = window.document.createElement('meta')
              meta.name = "description"
              meta.content = resolver.description
              window.document.getElementsByTagName('head')[0].appendChild(meta);
            }
            var app = window.document.getElementById('app')
            app.innerHTML = html
            res.send(window.document.documentElement.outerHTML.toString())
          })
        })
      })
      .catch((err) => {console.log(err)})
    })
  })
  return app
}
