import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 320px;
  box-sizing: border-box;
  border: solid 2px #eee;
  background-color: #eee;
  margin: 20px;
  opacity: 0;
  cursor: pointer;
  transition: all .8s ease 0s;

  animation: slide-top 0.6s ease-in-out ${props => props.dely ? props.dely.dely : 0}s forwards;
  @keyframes slide-top {
    from { transform: translateY(25%); opacity: 0; }
    to   { transform: translateY(0%); opacity: 1; }
  }

  &:hover { filter: blur(6px); }
`

export const Frame = styled.div`

`

export const TopBar = styled.div`
  position: absolute;
  top: -2px;
  left: -2px;
  width: 0;
  height: 4px;
  background-color: #e63d90;
  display: flex;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 4px;
    height: 100%;
    background-color: #fff;
    margin-left: 8px;
  }

  animation: show-bar 0.6s cubic-bezier(0.79, 0.01, 0.27, 0.99) ${props => props.dely ? (parseFloat(props.dely.dely) + 1.8) : 1.8}s forwards;
  @keyframes show-bar {
    from { width: 0; }
    to   { width: calc(100% + 4px); }
  }
`

export const BottomBar = styled.div`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 0;
  height: 4px;
  background-color: #e63d90;
  display: flex;
  flex-direction: row-reverse;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 4px;
    height: 100%;
    background-color: #fff;
    margin-right: 8px;
  }

  animation: show-bar 0.6s cubic-bezier(0.79, 0.01, 0.27, 0.99) ${props => props.dely ? (parseFloat(props.dely.dely) + 1.8) : 1.8}s forwards;
`

export const Body = styled.div`
  background-color: #fff;
  padding-top: 10px;
  opacity: 0;

  animation: slide-top 0.6s ease-in-out ${props => props.dely ? (parseInt(props.dely.dely) + .3) : .3}s forwards;
`

export const Thumb = styled.div`
  position: relative;
  width: calc(100% - 20px);
  height: 0;
  padding-top: 55%;
  margin: 0 auto;
  overflow: hidden;
  perspective: 500px;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(100%);
  }
  &::before { background-color: #eee; }
  &::after {
    background-image: url(./thumb.png);
    background-size: cover;
    background-position: center;
    transform-origin: center bottom;
  }

  &::before {
    animation: show-thumb-bg 0.6s cubic-bezier(0.79, 0.01, 0.27, 0.99) ${props => props.dely ? (parseFloat(props.dely.dely) + .8) : .8}s forwards;
  }
  &::after {
    animation: show-thumb 0.8s cubic-bezier(0.79, 0.01, 0.27, 0.99) ${props => props.dely ? (parseFloat(props.dely.dely) + 1.2) : 1.2}s forwards;
  }
  @keyframes show-thumb-bg {
    0%   { transform: translateY(100%); }
    100% { transform: translateY(0%); }
  }
  @keyframes show-thumb {
    0%   { transform: rotateX(180deg); opacity: 0 }
    100% { transform: rotateX(0); opacity: 1; }
  }
`

export const Line = styled.div`
  margin: 10px auto;
  width: calc(100% - 20px);
  height: 2px;
  background-color: #eee;
`

export const Title = styled.h3`
  margin: 0 auto;
  color: #e63d90;
  width: calc(100% - 20px);
  font-size: 18px;
  opacity: 0;

  animation: show-text 0.8s cubic-bezier(0.79, 0.01, 0.27, 0.99) ${props => props.dely ? (parseFloat(props.dely.dely) + .9) : .9}s forwards;
  @keyframes show-text {
    from { transform: translateY(30px); opacity: 0; }
    to   { transform: translateY(0px); opacity: 1; }
  }
`

export const Description = styled.p`
  margin: 0 auto;
  width: calc(100% - 20px);
  font-size: 13px;
  color: #777;
  padding: 15px 0;
  opacity: 0;
  animation: show-text 0.8s cubic-bezier(0.79, 0.01, 0.27, 0.99) ${props => props.dely ? (parseFloat(props.dely.dely) + 1) : 1}s forwards;
`

export const Date = styled.p`
  margin: 0;
  font-size: 12px;
  color: #999;
  text-align: right;
  padding-bottom: 14px;
  padding-right: 10px;
  opacity: 0;
  animation: show-text 0.8s cubic-bezier(0.79, 0.01, 0.27, 0.99) ${props => props.dely ? (parseFloat(props.dely.dely) + 1.1) : 1.1}s forwards;
`
