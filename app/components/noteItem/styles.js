import styled from 'styled-components'

export const NoteItem = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
  border-right: 5px solid;
  border-right-color: ${props => props.selected ? 'black' : 'transparent'};
`
export const NoteTitle = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
export const NoteDescription = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`