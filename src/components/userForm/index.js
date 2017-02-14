import m from 'mithril'
import { store } from '../../store'
import {getUserById} from '../../data/users/access'
import {getUserFormData} from '../../data/userForm/access'
import {saveUser} from '../../data/users/actions'
import {setFormUser, updateFormUser, setEmptyFormUser} from '../../data/userForm/actions'
import textInput from '../textInput'

export default {
  oninit ({state, attrs: {key}}) {
    var user = key ? getUserById(key) : null
    user
    ? store.dispatch(setFormUser(user))
    : store.dispatch(setEmptyFormUser())
    state.form = getUserFormData
  },
  view ({state: {form}}) {
    return m('form', {
      onsubmit
    }, [
      m(textInput, {
        name: 'name',
        label: 'Name',
        placeholder: 'Joe Bloggs',
        value: form().user.name,
        oninput: updateFormState
      }),
      m(textInput, {
        type: 'email',
        name: 'email',
        label: 'Email',
        placeholder: 'hello@joebloggs.com',
        value: form().user.email,
        oninput: updateFormState
      }),
      m(textInput, {
        name: 'address.streetAddress',
        label: 'Street',
        placeholder: '62 Baker Street',
        value: form().user.address.streetAddress,
        oninput: updateFormState
      }),
      m('button', { type: 'submit' }, 'Save')
    ])
  }
}

function onsubmit (event) {
  event.preventDefault()
  store.dispatch(saveUser())
}

function updateFormState (event) {
  event.preventDefault()
  store.dispatch(updateFormUser(event))
}
