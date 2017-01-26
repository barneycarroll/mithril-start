import m from 'mithril'
import routes from './routes'

m.route.prefix('')
m.route(document.body, '/', routes)
