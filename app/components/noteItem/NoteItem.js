import React from 'react'
import { NoteItem, NoteTitle, NoteDescription } from './styles'

export default class Component extends React.PureComponent {
  handleOnClick = () => {
    const { selectNote, note } = this.props
    selectNote(note.id)
  }
  render () {
    const { note, selectedNoteId } = this.props
    console.log(note === selectedNoteId)
    return (
      <NoteItem onClick={this.handleOnClick} selected={note.id === selectedNoteId}>
        <NoteTitle>{note.title}</NoteTitle>
        <NoteDescription>{note.desc}</NoteDescription>
      </NoteItem>
    )
  }
}
