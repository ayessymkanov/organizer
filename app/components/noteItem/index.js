import React from 'react'
import styled from 'styled-components'

const NoteItem = styled.div`
  border: 1px solid yellow;
`

export default class Component extends React.Component {
  render () {
    return (
      <NoteItem>
        <span>note item content</span>
      </NoteItem>
    ) 
  }
}