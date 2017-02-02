import m from 'mithril'
import store from './data/store'
import Home from './scenes/Home'
import About from './scenes/About'
import Courses from './scenes/Courses'

store({})
store().subscribe(m.redraw)

export default {
  '/': Home,
  '/home/:number': Home,
  '/about': About,
  '/courses': Courses
}
