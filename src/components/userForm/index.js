import m from 'mithril'
import {getUserById} from '../../data/users/access'
import {getUserFormData} from '../../data/userForm/access'
import {boundSaveUser} from '../../data/users/actions'
import {boundSetFormUser, boundUpdateFormUser, boundValidateUserForm,
        boundValidateUserField, boundSetEmptyFormUser} from '../../data/userForm/actions'
import textInput from '../textInput'

export default {
  oninit ({state, attrs: {key}}) {
    var user = key ? getUserById(key) : null
    user
    ? boundSetFormUser(user)
    : boundSetEmptyFormUser()
    state.form = getUserFormData
  },
  view ({state: {form}}) {
    console.log(form())
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
  boundValidateUserForm()
  var form = getUserFormData()
  if (!Object.keys(form.validationErrors).length) {
    boundSaveUser()
  }
}

function updateFormState (event) {
  event.preventDefault()
  boundUpdateFormUser(event)
}

function validateField (event) {
  event.preventDefault()
  boundValidateUserField(event)
}
