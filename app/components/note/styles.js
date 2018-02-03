import styled from 'styled-components'

export const Note = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const NoteContent = styled.textarea`
  flex: 1;
  width: 100%;
  margin: 0;
  padding: 1rem;
  resize: none;
  font-size: 100%;
  outline: none;
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 0;
`
export const ControlButtons = styled.div`
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoteHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const HeaderInput = styled.input`
  width: auto;
  border-color: transparent;
  outline: none;
  
  &:disabled {
    color: black;
  }
`
export const NoteTitle = styled(HeaderInput)`
 
`
export const NoteDescription = styled(HeaderInput)`
  
`