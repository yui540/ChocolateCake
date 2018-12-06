import React, { Component } from 'react'
import {
  Container,
  Body,
  Bg,
  Icon,
  Infomation,
  Job,
  Name,
  Label,
  Color,
  Type,
} from './style'

export default class MessageBox extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { job, name, color1, color2, type, dely } = this.props

    return (
      <Container dely={dely}>
        <Body dely={dely}>
          <Bg color1={color1} color2={color2} dely={dely}>
            <Icon dely={dely} />
            <Infomation>
              <Job dely={dely}>{job}</Job>
              <Name dely={dely}>{name}</Name>
            </Infomation>
          </Bg>
          <Label>
            <Color dely={dely} color1={color1} color2={color2} />
            <Type dely={dely} color1={color1} color2={color2}>{type}</Type>
          </Label>
        </Body>
      </Container>
    )
  }
}
