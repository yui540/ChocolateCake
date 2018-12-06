import React, { Component } from 'react'
import {
  Container,
  TopBar,
  Title,
  Message,
  LargeText,
  Text,
  Inner,
  BottomBar,
  ButtonBox,
  CancelButton,
  OkButton,
} from './style'

const text1 = `このデモは、CSSアニメーションを使った`
const text2 = `状態変化パターンの提案というかたちで`
const text3 = `CSSアニメーションを使ったWebサイトを`
const text4 = `作る上でのヒントにでもなれば幸いです。`

export default class MessageBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      close: false,
    }
  }

  onClose() {
    this.setState({ close: true })
  }

  onOpen() {
    this.setState({ open: true })
  }

  render() {
    return (
      <Container data-state={this.state.open} data-close={this.state.close}>
        <TopBar>
          <Title>メッセージが届いています</Title>
        </TopBar>
        <Message>
          <Inner>
            <LargeText>こんばんわ</LargeText>
            <Text>{text1}</Text>
            <Text>{text2}</Text>
            <Text>{text3}</Text>
            <Text>{text4}</Text>
          </Inner>
        </Message>
        <BottomBar>
          <ButtonBox>
            <CancelButton onClick={this.onClose.bind(this)} />
            <OkButton onClick={this.onOpen.bind(this)} />
          </ButtonBox>
        </BottomBar>
      </Container>
    )
  }
}
