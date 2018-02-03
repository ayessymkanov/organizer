import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Header from './NoteHeader'
import { editNote } from '../../actions/notesListActions'
import { Note, NoteContent } from './styles'

const mapStateToProps = ({ notesList }) => {
  const { selectedNoteId, notes } = notesList
  const note = notes.find(item => item.id === selectedNoteId) || {}
  return { note }
}

class Component extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }
  render () {
    const { note, editNote } = this.props
    const { title, desc, id } = note
    if (_.isEmpty(note)) {
      return null
    }
    return (
      <Note>
        <Header
          noteId={id}
          noteTitle={title}
          noteDesc={desc}
          editNote={editNote}
        />
        <NoteContent
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='Start typing...'
        />
      </Note>
    )
  }
}

export default connect(mapStateToProps, { editNote })(Component)
