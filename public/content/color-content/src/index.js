import React from 'react'
import { render } from 'react-dom'
import Content from './Content'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 1100px;
  height: 100%;
  transform: translateX(-50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

render(
  <Wrapper>
    <Content dely="0" />
    <Content dely="0.15" />
    <Content dely="0.3" />
    <Content dely="0.45" />
    <Content dely="0.6" />
    <Content dely="0.75" />
  </Wrapper>,
  document.getElementById('root')
)
