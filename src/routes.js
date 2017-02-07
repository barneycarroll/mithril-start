import m from 'mithril'
import Home from './scenes/Home'
import About from './scenes/About'
import Users from './scenes/Users'
import User from './scenes/User'
import UserCreate from './scenes/UserCreate'
import {store, initialiseStore, setAccessibleStore} from '../src/store'

setAccessibleStore(initialiseStore(window.__PRELOADED_STATE__))
store.subscribe(m.redraw)

export default {
  '/': Home,
  '/home/:number': Home,
  '/about': About,
  '/users': Users,
  '/users/create': UserCreate,
  '/users/:key': User
}
