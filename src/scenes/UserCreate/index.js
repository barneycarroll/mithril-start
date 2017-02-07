import m from 'mithril'
import {store} from '../../store'
import {beginRequest, completeRequest, thrownRequest} from '../../data/requests/actions'
import layout from '../../components/layout'

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

async function getJs () {
  store.dispatch(beginRequest())
  return await require.ensure([], (require) => {
    var js = require('./userCreate.js').default
    store.dispatch(completeRequest())
    return js
  })
}

export default {
  async onmatch ({id}) {
    const [ component ] = await Promise.all([
      getJs()
    ])

    this.component = component
    window.__STATE_IS_PRELOADED__ = false
  },
  render ({attrs}) {
    this.title = 'Create - User - Mithril'
    this.description = 'User Create Page'
    document.title = this.title
    return m(layout, m(this.component, attrs))
  }
}
