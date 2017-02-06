import m from 'mithril'
import c from './requestsPending.css'

export default {
  onbeforeremove: function (vnode) {
    vnode.dom.classList.add(c.exit)
    return new Promise(function (resolve) {
      setTimeout(resolve, 500)
    })
  },
  view (vnode) {
    return m(`.${c.loading}`, 'Loading')
  }
}
