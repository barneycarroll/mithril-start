import m from 'mithril'
import layout from '../../components/layout'

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default {
  onmatch () {
    return new Promise((resolve) => {
      require.ensure([], (require) => {
        this.about = require('./about.js').default
        resolve()
      })
    })
  },
  render (vnode) {
    this.title = 'About - Mithril'
    document.title = this.title
    return m(layout, vnode.attrs, m(this.about, vnode.attrs))
  }
}
