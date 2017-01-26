import Home from './scenes/Home'
import About from './scenes/About'

export default {
  '/': Home,
  '/:number': Home,
  '/about': About
}
