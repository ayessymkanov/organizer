import React from 'react'
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'
import NoteItem from '../noteItem/NoteItem'
import { addNoteAction } from '../../reducers/NotesListReducer'
import { NotesContainer, AddNoteButton } from './styles'

const mapStateToProps = ({ notesList }) => ({ notesList })

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: uuidv4(),
      title: 'Untitled',
      desc: 'Add a description'
    }
  }
  render () {
    const { notesList, addNoteAction } = this.props
    return (
      <NotesContainer>
        {notesList.map(note => <NoteItem key={note.id} note={note} />)}
        <AddNoteButton onClick={() => addNoteAction(this.state)}>new note</AddNoteButton>
      </NotesContainer>
    )
  }
}

export default connect(mapStateToProps, { addNoteAction })(Component)