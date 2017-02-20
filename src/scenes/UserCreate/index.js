import m from 'mithril'
import {getJs} from '../../utils'
import layout from '../../components/layout'

export default {
  onmatch () {
    var resolver = this
    return Promise.all([
      getJs(() => import('./userCreate.js'))
    ]).then((data) => {
      resolver.component = data[0]
      window.__STATE_IS_PRELOADED__ = false
    })
  },
  render ({attrs}) {
    this.title = 'Create - User - Mithril'
    this.description = 'User Create Page'
    document.title = this.title
    return m(layout, m(this.component, attrs))
  }
}
