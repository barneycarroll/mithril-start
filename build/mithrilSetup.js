import mock from 'mithril/test-utils/browserMock'
import xhr from 'w3c-xmlhttprequest'

const window = mock(global)
const document = window.document
Object.assign(global, {window, document})
global.window.XMLHttpRequest = xhr.XMLHttpRequest
