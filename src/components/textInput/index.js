import c from './textInput.css'
import m from 'mithril'

export default {
  view ({attrs: {type, name, label, placeholder, value, oninput, onchange, errors = []}}) {
    return m(`.${c.wrapper}`, [
      m(`.${c.label}`, { for: name }, label),
      m(`.${c.fieldWrapper}`, [
        m(`input.${c.field}`, {
          className: errors.length ? c.invalid : '',
          type: type || 'text',
          name,
          placeholder,
          value,
          oninput,
          onchange
        }),
        errors.map(error => {
          return m('span.error', error)
        })
      ])
    ])
  }
}
