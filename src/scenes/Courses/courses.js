import m from 'mithril'
import store from '../../data/store'
export default {
  course: {
    title: null
  },
  view (vnode) {
    return m('.courses', [
      m('h1', 'Courses'),
      m('p', JSON.stringify(this.course)),

      m('form', {
        onsubmit: (e) => {
          e.preventDefault()
          store().dispatch({
            type: 'CREATE_COURSE',
            course: this.course
          })
        }
      }, [
        m('input', {
          type: 'text',
          placeholder: 'Title',
          value: this.course.title,
          oninput: m.withAttr('value', (v) => { this.course.title = v })
        }),
        m('button', {
          type: 'submit'
        }, 'Submit')
      ]),
      m('div', JSON.stringify(store().getState())),
      console.log(JSON.stringify(store().getState()))
    ])
  }
}
