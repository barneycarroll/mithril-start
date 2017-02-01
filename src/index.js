import m from 'mithril'
import store from './data/store'
import routes from './routes'
import './styles.css'

store({})
store().subscribe(m.redraw)

m.route.prefix('')
m.route(document.body, '/', routes)
