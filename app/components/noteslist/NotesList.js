import React from 'react'
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'
import NoteItem from '../noteItem/NoteItem'
import { addNote, selectNote } from '../../actions/notesListActions'
import { NotesContainer, AddNoteButton } from './styles'

const mapStateToProps = ({ notesList }) => {
  const { notes, selectedNoteId } = notesList;
  return { notes, selectedNoteId };
}

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Untitled',
      desc: 'Add a description'
    }
  }
  render () {
    const { notes, addNote, selectNote, selectedNoteId } = this.props
    return (
      <NotesContainer>
        {notes.map(note => <NoteItem key={note.id} note={note} selectedNoteId={selectedNoteId} selectNote={selectNote} />)}
        <AddNoteButton onClick={() => addNote(this.state)}>new note</AddNoteButton>
      </NotesContainer>
    )
  }
}

export default connect(mapStateToProps, { addNote, selectNote })(Component)