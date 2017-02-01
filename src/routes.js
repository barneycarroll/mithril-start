import Home from './scenes/Home'
import About from './scenes/About'
import Courses from './scenes/Courses'

export default {
  '/': Home,
  '/home/:number': Home,
  '/about': About,
  '/courses': Courses
}
