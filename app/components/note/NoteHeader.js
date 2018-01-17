import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  border: 1px solid black;
`

export default class Component extends React.Component {
  render () {
    return <Header>Note header</Header>
  }
}