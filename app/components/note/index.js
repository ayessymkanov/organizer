import React from 'react'
import styled from 'styled-components'
import Header from './NoteHeader'

const Note = styled.div`
  flex: 1;
  border: 1px solid red;
`

export default class Component extends React.Component {
  render () {
    return (
      <Note>
        <Header />
        <textarea></textarea>
      </Note>
    )
  }
}