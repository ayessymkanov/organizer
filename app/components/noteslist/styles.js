import styled from 'styled-components'

export const NotesContainer = styled.div`
  position: relative;
  width: 360px;
  height: 100vh;
  overflow: scroll;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
`

export const AddNoteButton = styled.button`
  position: sticky;
  bottom: 0;
  display: block;
  width: 100%;
  padding: 0.5rem 0.25rem;
  margin: 0;
  border: 1px solid black;
`