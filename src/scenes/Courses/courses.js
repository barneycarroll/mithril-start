import m from 'mithril'
import store from '../../data/store'
import {createCourse} from '../../data/courses/actions'
export default {
  course: {
    title: null
  },
  view (vnode) {
    return m('.courses', [
      m('h1', 'Courses'),

      m('form', {
        onsubmit: (e) => {
          e.preventDefault()
          store().dispatch(createCourse(this.course))
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

      m('.courses-list', [
        store().getState().courses.map((course, index) => {
          return m('div', index + '-' + course.title)
        })
      ])
    ])
  }
}
