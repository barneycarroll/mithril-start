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
  "address.streetAddress": {
    presence: true
  }
}

export default function (model) {
  console.log (validate(model, validationSpec))
  return validate(model, validationSpec) || {}
}
