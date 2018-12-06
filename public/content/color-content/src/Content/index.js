import React, { Component } from 'react'
import {
  Container,
  Frame,
  TopBar,
  BottomBar,
  Body,
  Thumb,
  Line,
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
    const dely = this.props

    return (
      <Container dely={dely}>
        <Body dely={dely}>
          <Thumb dely={dely} />
          <Line />
          <Title dely={dely}>ここにタイトルがど〜ん。</Title>
          <Description dely={dely}>
            てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。てきすと。
          </Description>
          <Date dely={dely}>2018/11/29</Date>
        </Body>
        <Frame>
          <TopBar dely={dely} />
          <BottomBar dely={dely} />
        </Frame>
      </Container>
    )
  }
}
