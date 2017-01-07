import m from 'mithril'

import getBaseUrl from './baseUrl'

const baseUrl = getBaseUrl()

export function getUsers () {
  return get('users')
}

export function deleteUser (id) {
  return del(`users/${id}`)
}

function get (url) {
  return m.request({
    url: baseUrl + url
  })
  .then(onSuccess)
  .catch(onError)
}

function del (url) {
  return m.request({
    method: 'DELETE',
    url: baseUrl + url
  })
  .then(onSuccess)
  .catch(onError)
}

function onSuccess (response) {
  return response
}

function onError (err) {
  console.log(err)
}
