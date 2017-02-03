import m from 'mithril'
import store from './store'
import Home from './scenes/Home'
import About from './scenes/About'
import Users from './scenes/Users'
import User from './scenes/User'

store(window.__PRELOADED_STATE__)
store().subscribe(m.redraw)

export default {
  '/': Home,
  '/home/:number': Home,
  '/about': About,
  '/users': Users,
  '/users/:id': User
}
