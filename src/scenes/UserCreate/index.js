import m from 'mithril'
import layout from '../../components/layout'

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

async function getJs () {
  return await require.ensure([], (require) => {
    return require('./userCreate.js').default
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
    return m(layout, attrs, m(this.component, attrs))
  }
}
