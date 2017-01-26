import mock from 'mithril/test-utils/browserMock'

const window = mock()
const document = window.document

Object.assign(global, {window, document})
