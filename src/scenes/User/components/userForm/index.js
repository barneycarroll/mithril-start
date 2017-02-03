import m from 'mithril'
import textInput from '../../../../components/textInput'

export default {
  view ({attrs: {user, errors, onsubmit}}) {
    return m('form', {
      onsubmit
    }, [
      m(textInput, {
        name: 'userName',
        label: 'Name',
        placeholder: 'Joe Bloggs',
        value: user.name,
        oninput () { user.name = this.value }
      }),
      m('button', { type: 'submit' }, 'Save')
    ])
  }
}

//  A function from the course
//  function updateCourseState(event){
//    const field = event.target.name
//    let course = this.state.course
//    course[field] = event.target.value
//    return this.setState({course})
//  }
