import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import NoteItem from '../noteItem'
import { addNoteAction } from '../../reducers/NotesListReducer'

const NotesContainer = styled.div`
  width: 360px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
`

const AddNoteButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 0.25rem;
  border: 1px solid black;
`

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