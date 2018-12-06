import React, { Component } from 'react'
import {
  Container,
  MessageForm,
  Textarea,
  ButtonWrapper,
  SendButton,
  SendButtonBg,
  CancelButton,
  CancelButtonBg,
  Effect,
  ResultLabel,
  OpenButton,
} from './style'

export default class MessageBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messageForm: false,
      open: false,
      close: false,
      result: false,
    }
  }

  handleOpen() {
    this.setState({
      open: true,
      result: true,
    })
  }

  handleClose() {
    this.setState({ close: true })
  }

  openAnimationEnd() {
    this.setState({ open: false })
  }

  closeAnimationEnd() {
    this.setState({ close: false })
  }

  openMessageForm() {
    this.setState({ messageForm: true })
  }

  render() {
    const {
      open,
      close,
      result,
      messageForm,
    } = this.state

    return (
      <Container>
        <OpenButton onClick={this.openMessageForm.bind(this)} data-state={messageForm}>
          気持ちを伝える。
        </OpenButton>
        <MessageForm data-show={messageForm}>
          <Textarea placeholder='あなたの気持ちを書いてね。' />
          <ButtonWrapper>
            <CancelButton
              data-state={close}
              onClick={this.handleClose.bind(this)}>
              <CancelButtonBg />
              <Effect onAnimationEnd={this.closeAnimationEnd.bind(this)} />
            </CancelButton>
            <SendButton
              data-state={open}
              onClick={this.handleOpen.bind(this)}>
              <SendButtonBg />
              <Effect onAnimationEnd={this.openAnimationEnd.bind(this)} />
            </SendButton>
          </ButtonWrapper>
          <ResultLabel data-state={result}>
            <h3>あなたの気持ちを伝えました。</h3>
          </ResultLabel>
        </MessageForm>
      </Container>
    )
  }
}
