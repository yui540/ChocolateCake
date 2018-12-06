import React, { Component } from 'react'
import {
  Container,
  Frame,
  Bg,
  Card,
  Thumb,
  Description,
  ButtonWrapper,
  OkButton,
  CancelButton,
  CloseButton,
} from './style'

export default class MessageBox extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Container>
        <Frame>
          <div />
          <div />
          <div />
          <div />
        </Frame>
        <Bg />
        <Card>
          <Thumb />
          <Description>
            <p>yui540さんから<br />
            友達申請が来ています</p>
          </Description>
          <ButtonWrapper>
            <CancelButton />
            <OkButton />
          </ButtonWrapper>
          <CloseButton />
        </Card>
      </Container>
    )
  }
}
