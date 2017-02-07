import c from './textInput.css'
import m from 'mithril'

export default {
  view ({attrs: {type, name, label, placeholder, value, oninput, error}}) {
    return m(`.${c.wrapper}`, [
      m(`.${c.label}`, { for: name }, label),
      m(`.${c.fieldWrapper}`, [
        m(`input.${c.field}`, {
          type: type || 'text',
          name,
          placeholder,
          value,
          oninput
        })
      ])
    ])
  }
}
