import React from 'react'
import { render } from 'react-dom'
import Loading from './Loading'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #eee;
`

render(
  <Wrapper>
    <Loading />
  </Wrapper>,
  document.getElementById('root')
)
