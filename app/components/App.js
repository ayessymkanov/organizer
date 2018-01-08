import React from 'react'
import styled from 'styled-components'
import Container from './shared/Container'
import TodoContainer from './sections/todo/TodoContainer'
import NotesContainer from './sections/notes/NotesContainer'
import CalendarContainer from './sections/calendar/CalendarContainer'
import ExpensesContainer from './sections/expenses/ExpencesContainer'

import resetStyles from '../globalStyles';

const AppContainer = styled.div`
  display: flex;
`

export default () => {
  resetStyles()
  return (
    <Container>
      <AppContainer>
        <TodoContainer />
        <NotesContainer />
        <CalendarContainer />
        <ExpensesContainer />
      </AppContainer>
    </Container>
  )
}