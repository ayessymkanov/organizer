import React from 'react'
import { NoteItem, NoteTitle, NoteDescription } from './styles'

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
