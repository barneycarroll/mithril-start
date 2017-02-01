import m from 'mithril'
import layout from '../../components/layout'

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default {
  onmatch () {
    return new Promise((resolve) => {
      require.ensure([], (require) => {
        this.courses = require('./courses.js').default
        resolve()
      })
    })
  },
  render (vnode) {
    this.title = 'Courses - Mithril'
    this.description = 'Courses Page'
    document.title = this.title
    return m(layout, vnode.attrs, m(this.courses, vnode.attrs))
  }
}
