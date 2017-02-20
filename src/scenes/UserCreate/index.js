import m from 'mithril'
import {boundBeginRequest, boundCompleteRequest, boundThrowRequest} from '../../data/requests/actions'
import layout from '../../components/layout'

function getJs () {
  boundBeginRequest()
  return import('./userCreate.js')
  .then((module) => {
    boundCompleteRequest()
    return module.default
  })
  .catch((err) => {
    boundThrowRequest(err)
  })
}

export default {
  onmatch () {
    var resolver = this
    return Promise.all([
      getJs()
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
