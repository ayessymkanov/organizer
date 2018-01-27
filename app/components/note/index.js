import React from 'react'
import styled from 'styled-components'
import Header from './NoteHeader'

const Note = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const NoteContent = styled.textarea`
  flex: 1;
  width: 100%;
  margin: 0;
  padding: 1rem;
  resize: none;
  font-size: 100%;
  outline: none;
`

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
