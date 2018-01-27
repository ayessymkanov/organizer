import React from 'react'
import styled from 'styled-components'

const NoteItem = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
`
const NoteTitle = styled.span`
  display: block;
  margin-bottom: 0.5rem;
`
const NoteDescription = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export default class Component extends React.PureComponent {
  render () {
    const { note } = this.props
    return (
      <NoteItem>
        <NoteTitle>{note.title}</NoteTitle>
        <NoteDescription>{note.desc}</NoteDescription>
      </NoteItem>
    )
  }
}
