import React from 'react'
import { connect } from 'react-redux'
import NoteItem from '../noteItem'
import { addNoteAction } from '../../reducers/NotesListReducer'
import { NotesContainer, AddNoteButton } from './styles'

const mapStateToProps = ({ notesList }) => ({ notesList })

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: Math.round(Math.random()),
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