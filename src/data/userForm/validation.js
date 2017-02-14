import validate from 'validate.js'

let validationSpec = {
  id: {
    numericality: {
      onlyInteger: true,
      greaterThan: 0
    }
  },
  name: {
    presence: true
  },
  email: {
    presence: true,
    email: true
  },
  'address.streetAddress': {
    presence: {
      message: '^Street is required'
    }
  }
}

export default function (model) {
  return validate(model, validationSpec) || {}
}
