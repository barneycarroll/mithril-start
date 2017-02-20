import m from 'mithril'
import routes from './routes'
import './styles.css'

m.route.prefix('')
m.route(document.body, '/', routes)
