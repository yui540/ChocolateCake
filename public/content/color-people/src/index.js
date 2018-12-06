import React from 'react'
import { render } from 'react-dom'
import People from './People'
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
    <People dely="0" job="原作" type="staff" name="yui540" color1="#a58eed" color2="#5599ed" />
    <People dely="0.2" job="原作イラスト" type="staff" name="yui540" color1="#a58eed" color2="#5599ed" />
    <People dely="0.4" job="主人公" type="cast" name="yui540" color1="#0ddbad" color2="#cddc39" />
    <People dely="0.6" job="ヒロイン" type="cast" name="yui540" color1="#0ddbad" color2="#cddc39" />
  </Wrapper>,
  document.getElementById('root')
)
