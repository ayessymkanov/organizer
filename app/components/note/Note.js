import React from 'react'
import styled from 'styled-components'
import Header from './NoteHeader'
import { Note, NoteContent } from './styles'

export default class Component extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  onChange = (e) => {
    this.setState({ value: e.target.value })
  }
  render () {
    return (
      <Note>
        <Header />
        <NoteContent value={this.state.value} onChange={this.onChange} />
      </Note>
    )
  }
}
