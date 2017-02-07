import express from 'express'
import m from 'mithril'
import {store, initialiseStore, setAccessibleStore} from '../src/store'
import mithrilNodeRender from 'mithril-node-render'
global.m = m

const app = express()


module.exports = function ({html, routes}) {
  Object.keys(routes).forEach(route => {
    const resolver = routes[route]
    app.get(route, (req, res, next) => {
      res.type('html')

      setAccessibleStore(initialiseStore())

      Promise.resolve()
      .then(() => resolver.onmatch(req.params, req.url))
      .then(() => resolver.render({attrs: req.params}))
      .then(component => {
        return mithrilNodeRender(component)
        .then(page => {
          var replacements = {
            "{{title}}": resolver.title,
            "{{description}}": resolver.description,
            "{{content}}": page,
            "{{state}}": JSON.stringify(store.getState())
          }
          var file = html().replace(/{{\w+}}/g, (all) => replacements[all] || all)
          res.send(file)
        })
        .catch(err => console.log(err))
      })
    })
  })
  return app
}
