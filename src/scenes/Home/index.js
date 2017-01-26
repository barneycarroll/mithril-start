import m from 'mithril'
import layout from '../../components/layout'

if (typeof require.ensure !== 'function') require.ensure = require('isomorphic-ensure')({dirname: __dirname})

export default {
  onmatch () {
    var resolver = this
    return new Promise(function(resolve) {
      require.ensure(['./home.js'], function(require) {
        resolver.home = require('./home.js').default;
        resolve()
      })
    })
  },
  render (vnode) {
    var resolver = this
    this.title = 'Home - Mithril'
    this.description = 'test the meta description'
    return m(layout, vnode.attrs, m(resolver.home, vnode.attrs))
  }
}
