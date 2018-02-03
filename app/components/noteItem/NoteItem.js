import React from 'react'
import { NoteItem, NoteTitle, NoteDescription } from './styles'

export default class Component extends React.PureComponent {
  handleOnClick = () => {
    const { selectNote, note } = this.props
    selectNote(note.id)
  }
  render () {
    const { note } = this.props
    return (
      <NoteItem onClick={this.handleOnClick}>
        <NoteTitle>{note.title}</NoteTitle>
        <NoteDescription>{note.desc}</NoteDescription>
      </NoteItem>
    )
  }
}
