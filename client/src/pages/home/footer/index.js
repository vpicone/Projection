import React, { Component } from 'react'
import styled from 'styled-components'
import GridContainer from '../../components/GridContainer';

const Footer = styled(GridContainer)`
      background-color: rebeccapurple;
      grid-area: footer;
`

export default class ProjectList extends Component {
  render() {
    return (
      <Footer>
        Detail
      </Footer>
    )
  }
}
