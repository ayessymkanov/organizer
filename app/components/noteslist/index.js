import React from 'react'
import styled from 'styled-components'
import NoteItem from '../noteItem'

const NotesContainer = styled.div`
  width: 360px;
  border: 1px solid white;
`

export default class Component extends React.Component {
  render() {
    return (
      <NotesContainer>
        <NoteItem />
        <NoteItem />
        <NoteItem />
      </NotesContainer>
    ) 
  }
}