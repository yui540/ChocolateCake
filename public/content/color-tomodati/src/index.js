import React from 'react'
import { render } from 'react-dom'
import Tomodati from './Tomodati'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

render(
  <Wrapper>
    <Tomodati />
  </Wrapper>,
  document.getElementById('root')
)
