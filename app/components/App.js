import React from 'react'
import styled from 'styled-components'
import { Container } from './shared/components'
import TodoContainer from './sections/todo/TodoContainer'
import NotesContainer from './sections/notes/NotesContainer'
import CalendarContainer from './sections/calendar/CalendarContainer'
import ExpensesContainer from './sections/expenses/ExpencesContainer'

import resetStyles from '../globalStyles'

const AppContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
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
