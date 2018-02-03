import React from 'react'
import { Container } from './shared/components'
import NotesList from './noteslist/NotesList'
import Note from './note/Note'

import resetStyles from '../globalStyles'

export default () => {
  resetStyles()
  return (
    <Container>
      <NotesList />
      <Note />
    </Container>
  )
}
