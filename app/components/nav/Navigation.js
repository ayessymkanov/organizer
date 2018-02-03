import React from 'react'
import { NavContainer } from './styles'
import { Container } from '../shared/components'

export default class Component extends React.Component {
  render () {
    return (
      <NavContainer>
        <Container>
          <span>nav</span>
        </Container>
      </NavContainer>
    )
  }
}
