import m from 'mithril'
import {boundBeginRequest, boundCompleteRequest, boundThrowRequest} from '../../data/requests/actions'
import layout from '../../components/layout'

function getJs () {
  var js
  boundBeginRequest()
  import('./userCreate.js')
  .then((val) => {
    js = val
    boundCompleteRequest()
  })
  .catch((err) => {
    boundThrowRequest(err)
  })
  return js
}

export default {
  onmatch () {
    var resolver = this
    return Promise.all([
      getJs()
    ]).then((data) => {
      resolver.component = data[0].default
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
