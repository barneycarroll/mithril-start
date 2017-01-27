import m from 'mithril'
import layout from '../../components/layout'

if (typeof require.ensure !== 'function') require.ensure = require('isomorphic-ensure')({dirname: __dirname})

export default {
  onmatch () {
    return new Promise((resolve) => {
      require.ensure([], (require) => {
        this.home = require('./home.js').default
        resolve()
      })
    })
  },
  render (vnode) {
    this.title = 'Home - Mithril'
    this.description = 'test the meta description'
    document.title = this.title
    return m(layout, vnode.attrs, m(this.home, vnode.attrs))
  }
}
