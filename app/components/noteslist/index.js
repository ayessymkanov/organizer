import React from 'react'
import styled from 'styled-components'
import NoteItem from '../noteItem'

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

export default class Component extends React.Component {
  render () {
    return (
      <NotesContainer>
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <AddNoteButton>new note</AddNoteButton>
      </NotesContainer>
    )
  }
}
