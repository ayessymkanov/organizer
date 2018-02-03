import React from 'react'
import * as Icon from 'react-icons/lib/ti'
import { 
  Header,
  ControlButtons, 
  IconWrapper,
  NoteHeaderContent,
  NoteTitle,
  NoteDescription
} from './styles'

export default class Component extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editing: false,
      id: props.noteId,
      title: props.noteTitle,
      desc: props.noteDesc
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      id: nextProps.noteId,
      title: nextProps.noteTitle,
      desc: nextProps.noteDesc,
      editing: false
    })
  }

  handleCancel = () => {
    this.setState({
      editing: !this.state.editing,
      title: this.props.noteTitle,
      desc: this.props.noteDesc
    })
  }

  submitEdit = () => {
    const { id, title, desc } = this.state
    this.setState({ editing: !this.state.editing })
    this.props.editNote({ id, title, desc })
  }

  handleEdit = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  renderControlButtons = () => {
    const { editing } = this.state
    return (
      <ControlButtons>
        {!editing && 
          <IconWrapper data-tooltip="edit">
            <Icon.TiPencil color="#aaa" onClick={() => this.setState({ editing: !editing})} />
          </IconWrapper>
        }
        {editing && 
          <IconWrapper data-tooltip="cancel">
            <Icon.TiTimes color="#aaa" onClick={this.handleCancel} />
          </IconWrapper>
        }
        {editing && 
          <IconWrapper data-tooltip="save">
            <Icon.TiTick color="#aaa" onClick={this.submitEdit} />
          </IconWrapper>
        }
      </ControlButtons>
    )
  }

  renderNoteContent = () => {
    const { editing, title, desc } = this.state
    return (
      <NoteHeaderContent>
        <NoteTitle
          value={title}
          name='title'
          disabled={!editing}
          onChange={this.handleEdit}
        />
        <NoteDescription
          value={desc}
          name='desc'
          disabled={!editing}
          onChange={this.handleEdit}
        />
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
