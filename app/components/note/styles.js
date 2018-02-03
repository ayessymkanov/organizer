import styled from 'styled-components'

export const NoNote = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

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
  border: none;
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 0;
`
export const ControlButtons = styled.div`
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const IconWrapper = styled.div`
  position: relative;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid #aaa;
  cursor: pointer;
  & > svg {
    width: 100%;
    height: 100%;
  }
  &:hover::after {
    opacity: 1;
  }
  &::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.2rem;
    border-radius: 0.2rem;
    background-color: #aaa;
    color: white;
    opacity: 0;
    transition: opacity 100ms;
    font-size: 0.8rem;
  }
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
