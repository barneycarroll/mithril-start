import m from 'mithril'
import layout from '../../components/layout'

if (typeof require.ensure !== 'function') require.ensure = require('isomorphic-ensure')({dirname: __dirname})

export default {
  onmatch () {
    var resolver = this
    return new Promise((resolve) => {
      require.ensure(['./about.js'], (require) => {
        resolver.about = require('./about.js').default
        console.log(resolver.home)
        resolve()
      })
    })
  },
  render (vnode) {
    var resolver = this
    this.title = 'About - Mithril'
    return m(layout, vnode.attrs, m(resolver.about, vnode.attrs))
  }
}
