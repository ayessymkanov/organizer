import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border: 1px solid black;
`
const NoteTitle = styled.div`

`
const NoteDescription = styled.div`

`

export default class Component extends React.Component {
  render () {
    return (
      <Header>
        <NoteTitle>Note title</NoteTitle>
        <NoteDescription>Note description</NoteDescription>
      </Header>
    )
  }
}