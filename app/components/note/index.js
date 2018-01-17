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
  resize: none;
  font-size: 100%;
`

export default class Component extends React.Component {
  render () {
    return (
      <Note>
        <Header />
        <NoteContent value="hello world" />
      </Note>
    )
  }
}