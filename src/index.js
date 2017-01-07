import './index.scss'

import m from 'mithril'
global.window.m = m
import component from './component'

m.mount(document.body, component)

