import React, { Component } from 'react'
import {
  Container,
  OpenButtonWrapper,
  OpenButton,
  Image,
  Label,
  Panel,
  BallWrapper,
  Ball,
  Frame,
  Icon,
  Name,
  Description,
  LinkWrapper,
  Link,
} from './style'

export default class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  handleClick() {
    this.setState({ open: true })
  }

  render() {
    const { open } = this.state

    return (
      <Container>
        <OpenButtonWrapper>
          <OpenButton onClick={this.handleClick.bind(this)}>
            <Image />
          </OpenButton>
          <Label />
        </OpenButtonWrapper>
        <Panel data-state={open}>
          <BallWrapper data-state={open}>
            <Ball />
            <Ball />
            <Ball />
            <Ball />
          </BallWrapper>
          <Frame data-state={open}>
            <Icon data-state={open} />
            <Name data-state={open} />
            <Description data-state={open}>
              <p>JavaScriptとCSSと可愛いのがすこ。</p>
              <p>1996/11/09</p>
              <a href="https://yui540.graphics">yui540.graphics</a>
            </Description>
            <LinkWrapper data-state={open}>
              <Link className="fab fa-twitter" />
              <Link className="fab fa-github" />
              <Link className="fab fa-instagram" />
            </LinkWrapper>
          </Frame>
        </Panel>
      </Container>
    )
  }
}
