import React from 'react'
import styled from 'styled-components'
import { Container } from './shared/components'
import NotesList from './noteslist'
import Note from './note'

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
