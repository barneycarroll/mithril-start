import Home from './scenes/Home'
import About from './scenes/About'

export default {
  '/': Home,
  '/home/:number': Home,
  '/about': About
}
