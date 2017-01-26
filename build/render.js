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

module.exports = function (opts) {
  const config = opts || {}
  const { routes = {}, head = [] } = config


  Object.keys(routes).forEach(route => {
    const mod = routes[route]
    app.get(route, (req, res, next) => {
      res.type('html')
      if (req.session && req.session.user) {
        return res.end((base('')))
      }

      const attrs = {
        params: req.params,
        query: req.query,
        protocol: req.protocol,
        host: req.get('host'),
        title: '',
        description: ''
      }


      var onmatch = mod.onmatch || function () { return mod }
      var render = mod.render || function (component) { return component }
      Promise.resolve()
      .then(() => onmatch(req.params, req.url))
      .then(() => {
        var component = mod.render({attrs: req.params})
        console.log(mod)
        attrs.title = mod.title
        attrs.description = mod.description
        return component;
      })
      .then(function(mod){
        return mithrilNodeRender(mod, attrs)
        .then((html) => {
          createDocument((err, window) => {
            if (attrs.title){
              window.document.title = attrs.title
            }
            if (attrs.description){
              var meta = window.document.createElement('meta')
              meta.name = "description"
              meta.content = attrs.description
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
