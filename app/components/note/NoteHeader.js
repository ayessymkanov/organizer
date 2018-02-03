import React from 'react'
import { Header, ControlButtons, NoteHeaderContent, NoteTitle, NoteDescription } from './styles'

export default class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  renderControlButtons = () => {
    const { editing } = this.state
    return (
      <ControlButtons>
        {!editing && <button onClick={() => this.setState({ editing: !editing})}>edit</button>}
        {editing && <button onClick={() => this.setState({ editing: !editing })}>cancel</button>}
        {editing && <button>save</button>}
      </ControlButtons>
    )
  }

  renderNoteContent = () => {
    const { editing } = this.state
    return (
      <NoteHeaderContent>
        <NoteTitle value="Untitled" disabled={!editing} />
        <NoteDescription value="Note description" disabled={!editing} />
      </NoteHeaderContent>
    )
  }

  render () {
    const { editing } = this.state
    return (
      <Header>
        {this.renderControlButtons()}
        {this.renderNoteContent()}
      </Header>
    )
  }
}
