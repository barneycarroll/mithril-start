import c from './textInput.css'
import m from 'mithril'

export default {
  view ({attrs: {name, label, defaultOption, value, onchange, options, error}}) {
    return m(`.${c.wrapper}`, [
      m(`.${c.label}`, { for: name }, label),
      m(`.${c.fieldWrapper}`, [
        m(`select.${c.field}`, {
          name,
          value,
          onchange
        }, [
          m('option', defaultOption),
          options.map(({value, text}) => {
            return m('option', {
              key: value,
              value
            }, text)
          })
        ])
      ])
    ])
  }
}
