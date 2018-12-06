import React, { Component } from 'react'
import {
  Container,
  Block,
  Text,
  Frame,
  Result,
} from './style'

export default class MessageBox extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Container>
        <Block>
          <div /><div /><div /><div />
          <div /><div /><div /><div />
          <div /><div /><div /><div />
          <div /><div /><div /><div />
        </Block>
        <Text>
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </Text>
        <Frame>
          <div />
          <div />
          <div />
          <div />
        </Frame>
        <Result>
          <div />
          <div />
          <div />
          <div />
          <div />
        </Result>
      </Container>
    )
  }
}
