import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin: 20px;
  width: 420px;
  box-sizing: border-box;
  border: solid 2px #eee;
  background-color: #eee;
  transform: scaleY(0);

  animation: scaleY .4s ease ${props => parseFloat(props.dely) + 0}s forwards;
  @keyframes scaleY {
    from { transform: scaleY(0); }
    to   { transform: scaleY(1); }
  }
`

export const Body = styled.div`
  background-color: #fff;
  transform: scaleY(0);

  animation: scaleY .4s ease ${props => parseFloat(props.dely) + .3}s forwards;
`

export const Bg = styled.div`
  position: relative;
  padding: 35px 25px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-image: linear-gradient(
    90deg,
    ${props => props.color1},
    ${props => props.color2}
  );
  transform: scaleX(0);
  animation: scaleY .4s ease ${props => parseFloat(props.dely) + .7}s forwards;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgba(255,255,255,.5);
    transform: translateX(-100%);
    animation: slide-right .4s ease ${props => parseFloat(props.dely) + 1}s forwards;
  }

  @keyframes scaleX {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  @keyframes slide-right {
    from { transform: translateX(-100%); }
    to   { transform: translateX(0%); }
  }
`

export const Icon = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  transform: scale(0);

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  &::before {
    transform: scale(1.15);
    background-color: rgba(255,255,255,.5);
  }
  &::after {
    background-image: url(./yui540.png);
    background-position: center;
    background-size: cover;
  }

  animation: icon .6s cubic-bezier(0.82,-0.01, 0.25, 1) ${props => parseFloat(props.dely) + 1.1}s forwards;
  @keyframes icon {
    from { transform: scale(0) rotate(-180deg); }
    to   { transform: scale(1) rotate(0); }
  }
`

export const Infomation = styled.div`
  position: relative;
  width: calc(100% - 175px);
  margin-left: 50px;
`

export const Job = styled.p`
  font-size: 25px;
  color: #fff;
  margin: 0;
  opacity: 0;

  animation: fadein .8s ease ${props => parseFloat(props.dely) + 1.3}s forwards;
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`

export const Name = styled.h2`
  font-size: 25px;
  color: #fff;
  margin: 0;
  text-align: right;
  opacity: 0;

  animation: fadein .8s ease ${props => parseFloat(props.dely) + 1.5}s forwards;
`

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`

export const Color = styled.div`
  display: flex;
  &::before,
  &::after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    margin-right: 12px;
    transform: scale(0);
  }
  &::before {
    background-color: ${props => props.color1};
    animation: icon .6s  cubic-bezier(0.82,-0.01, 0.25, 1) ${props => parseFloat(props.dely) + 1.5}s forwards;
  }
  &::after {
    background-color: ${props => props.color2};
    animation: icon .6s  cubic-bezier(0.82,-0.01, 0.25, 1) ${props => parseFloat(props.dely) + 1.6}s forwards;
  }
`

export const Type = styled.h4`
  margin: 0;
  font-size: 16px;
  letter-spacing: .1em;
  background-image: linear-gradient(
    90deg,
    ${props => props.color1},
    ${props => props.color2}
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  opacity: 0;

  animation: show-type .6s  cubic-bezier(0.82,-0.01, 0.25, 1) ${props => parseFloat(props.dely) + 1.7}s forwards;
  @keyframes show-type {
    from { transform: translateX(-20px); opacity: 0; }
    to   { transform: translateX(0px); opacity: 1; }
  }
`
