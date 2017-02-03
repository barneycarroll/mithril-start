import m from 'mithril'

import getBaseUrl from '../baseUrl'

const baseUrl = getBaseUrl()

export function getUsers () {
  return get('users')
}

export function getUser (id) {
  return get(`users/${id}`)
}

export function saveUser (user) {
  return save('users', user)
}

export function deleteUser (id) {
  return del(`users/${id}`)
}

function get (url) {
  return m.request({
    url: baseUrl + url
  })
}

function save (url, data) {
  var method = data.id ? 'PUT' : 'POST'
  url = baseUrl + url + (data.id ? `/${data.id}` : '')

  return m.request({
    method,
    url,
    data
  })
}

function del (url) {
  return m.request({
    method: 'DELETE',
    url: baseUrl + url
  })
}
