import m from 'mithril'
import {store} from '../../store'
import {getUserById} from '../../data/users/access'
import {getUserFormData} from '../../data/userForm/access'
import {saveUser} from '../../data/users/actions'
import {setFormUser, updateFormUser, validateUserForm, validateUserField, setEmptyFormUser} from '../../data/userForm/actions'
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
        oninput: updateFormState,
        onchange: validateField,
        errors: form().validationErrors.name
      }),
      m(textInput, {
        type: 'email',
        name: 'email',
        label: 'Email',
        placeholder: 'hello@joebloggs.com',
        value: form().user.email,
        oninput: updateFormState,
        onchange: validateField,
        errors: form().validationErrors.email
      }),
      m(textInput, {
        name: 'address.streetAddress',
        label: 'Street',
        placeholder: '62 Baker Street',
        value: form().user.address.streetAddress,
        oninput: updateFormState,
        onchange: validateField,
        errors: form().validationErrors['address.streetAddress']
      }),
      m('button', {
        type: 'submit',
        disabled: Object.keys(form().validationErrors).length
      }, 'Save')
    ])
  }
}

function onsubmit (event) {
  event.preventDefault()
  store.dispatch(validateUserForm())
  var form = getUserFormData()
  if (!Object.keys(form.validationErrors).length){
    store.dispatch(saveUser())
  }
}

function updateFormState (event) {
  event.preventDefault()
  store.dispatch(updateFormUser(event))
}

function validateField (event) {
  event.preventDefault()
  store.dispatch(validateUserField(event))
}
