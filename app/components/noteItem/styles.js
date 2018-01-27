import styled from 'styled-components'

export const NoteItem = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
`
export const NoteTitle = styled.span`
  display: block;
  margin-bottom: 0.5rem;
`
export const NoteDescription = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`