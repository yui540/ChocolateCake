import React, { Component } from 'react'
import {
  Container,
  Jacket,
  Bg,
  BgFrame,
  Thumb,
  TextBox,
  Title,
  Description,
  Date,
} from './style'

export default class MessageBox extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Container>
        <Jacket>
          <Bg>
            <BgFrame>
              <div />
              <div />
              <div />
              <div />
            </BgFrame>
          </Bg>
          <Thumb />
        </Jacket>
        <TextBox>
          <Title>タイトルがど〜ん。</Title>
          <Description>
            てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。
          </Description>
          <Date>2018/12/03</Date>
        </TextBox>
      </Container>
    )
  }
}
