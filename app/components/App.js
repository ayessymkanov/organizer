import React from 'react'
import { Container, AppContainer } from './shared/components'
import Navigation from './nav/Navigation'
import NotesList from './noteslist/NotesList'
import Note from './note/Note'

import resetStyles from '../globalStyles'

export default () => {
  resetStyles()
  return (
    <Container>
      <Navigation />
      <AppContainer>
        <NotesList />
        <Note />
      </AppContainer>
    </Container>
  )
}
