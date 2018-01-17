import React from 'react'
import styled from 'styled-components'
import NoteItem from '../noteItem'

const NotesContainer = styled.div`
  width: 360px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
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