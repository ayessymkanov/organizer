import styled from 'styled-components'

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
export const NoteContent = styled.div`
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