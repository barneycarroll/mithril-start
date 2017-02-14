import c from './sidebar.css'
import m from 'mithril'

export default {
  oninit (vnode) {
    vnode.state.open = false
  },
  view (vnode) {
    return m(`.${c.sidebarContainer}`, {
      className: vnode.state.open ? c.open : ''
    }, [
      m('.trigger', [
        m(`button.${c.sidebarButton}`, {
          type: 'button',
          onclick () { vnode.state.open = !vnode.state.open }
        }, 'Actions')
      ]),
      m(`.${c.sidebarBackdrop}`, {
        onclick () { vnode.state.open = !vnode.state.open }
      }),
      m(`.${c.sidebar}`, [
        m('.content', 'hdfhdfhfdahjfdwa fewjhkehfew dfsjhfehjf jfhjf')
      ])
    ])
  }
}
