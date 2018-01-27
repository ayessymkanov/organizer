import React from 'react'
import styled from 'styled-components'

const NoteItem = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
`
const NoteTitle = styled.span`
  display: block;
  margin-bottom: 0.5rem;
`
const NoteDescription = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export default class Component extends React.Component {
  render () {
    return (
      <NoteItem>
        <NoteTitle>Note title</NoteTitle>
        <NoteDescription>note short description asdkjans asdnkas asdnkjansdjk najsnd jkan</NoteDescription>
      </NoteItem>
    )
  }
}
