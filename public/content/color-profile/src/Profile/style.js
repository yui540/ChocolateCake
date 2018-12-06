import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const OpenButtonWrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const OpenButton = styled.button`
  appearance: none;
  border: none;
  position: relative;
  background-color: transparent;
  width: 140px;
  height: 140px;
  padding: 0;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.05);
    animation: wave 1.4s ease-in-out 0s infinite;
  }

  &:focus { outline: none; }

  @keyframes wave {
    0%   { transform: scale(1.15); }
    50%  { transform: scale(1.3); }
    100% { transform: scale(1.15); }
  }
`

export const Image = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    transition: all 0.7s ease 0s;
  }
  &::after {
    content: "Open";
    font-size: 22px;
    color: #fff;
    letter-spacing: .2em;
    text-align: center;
    line-height: 140px;
    opacity: 0;
  }
  &::before {
    background-image: url(./yui540.png);
    background-position: center;
    background-size: cover;
    background-position: center;
  }
  &:hover::before {
    transform: scale(1.3);
    filter: blur(4px) brightness(60%);
  }
  &:hover::after { opacity: 1; }
`

export const Label = styled.h3`
  position: relative;
  margin-top: 22px;
  animation: flash 1.4s ease-in-out 0s infinite;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40%;
    background-color: rgba(0,0,0,.05);
  }

  &::after {
    position: relative;
    content: "Click!";
    display: block;
    font-size: 16px;
    letter-spacing: .2em;
    color: #888;
    padding: 0 20px;
    display: inline-block;
    margin: 0;
  }

  @keyframes flash {
    0%   { opacity: 0.1; }
    50%  { opacity: 1; }
    100% { opacity: 0.1; }
  }
`

export const Panel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  display: none;

  &[data-state="true"] { display: block; }
`

export const BallWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  div:nth-child(1) { left: -10px; top: -10px; }
  div:nth-child(2) { right: -10px; top: -10px; }
  div:nth-child(3) { left: -10px; bottom: -10px; }
  div:nth-child(4) { right: -10px; bottom: -10px; }

  &[data-state="true"] div {
    animation: show-ball .5s cubic-bezier(0.04, 0.2, 0.15, 1.04) .3s forwards;
  }
  @keyframes show-ball {
    0%   { transform: scale(0); }
    50%  { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`

export const Ball = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #eee;
  border-radius: 50%;
  transform: scale(0);
`

export const Frame = styled.div`
  position: relative;
  background-color: #fff;
  border: solid 4px #eee;
  border-radius: 14px;
  padding: 45px 0;
  opacity: 0;

  &[data-state="true"] {
    animation: popup .5s cubic-bezier(0.04, 0.2, 0.15, 1.04) 0s forwards;
  }

  @keyframes popup {
    0%   { opacity: 0; transform: scale(0.6); }
    50%  { transform: scale(1.05); }
    100% { opacity: 1; transform: scale(1); }
  }
`

export const Icon = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: auto;
  margin-top: -110px;
  border: solid 8px #fff;
  box-sizing: border-box;
  background-image: url(./yui540.png);
  background-position: center;
  background-size: cover;
  background-position: center;
  opacity: 0;

  &[data-state="true"] {
    animation: rotate-icon .9s ease-out .6s forwards;
  }
  @keyframes rotate-icon {
    0%   { opacity: 0; transform: translateX(50%) rotate(120deg); }
    40%  { opacity: 1; transform: translateX(-8%) rotate(-14deg); }
    100% { opacity: 1; transform: translateX(0%) rotate(0deg); }
  }
`

export const Name = styled.h3`
  position: relative;
  font-size: 26px;
  color: #fff;
  text-align: center;
  padding: 0;
  margin: 0 auto;
  margin-top: 15px;
  width: 65%;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #A092E7;
    transform: translate(-101%);
  }
  &::after {
    position: relative;
    content: "yui540";
    display: block;
  }

  &[data-state="true"]::before {
    animation: slide-right .5s cubic-bezier(0.04, 0.2, 0.15, 1.04) 1.1s forwards;
  }

  @keyframes slide-right {
    from { transform: translateX(-100%); }
    to   { transform: translateX(0%); }
  }
`

export const Description = styled.div`
  font-size: 14px;
  color: #777;
  text-align: center;
  line-height: 1.4;
  margin-top: 40px;
  opacity: 0;

  a {
    color: #BD6AD4;
    text-decoration: none;
  }

  &[data-state="true"] {
    animation: show-description .8s cubic-bezier(0.04, 0.2, 0.15, 1.04) 1.4s forwards;
  }
  @keyframes show-description {
    from { transform: translateY(10%); opacity: 0; }
    to   { transform: translateY(0%); opacity: 1; }
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  &[data-state="true"] a:nth-child(1) {
    animation: bound .5s ease 1.8s forwards;
  }
  &[data-state="true"] a:nth-child(2) {
    animation: bound .5s ease 1.9s forwards;
  }
  &[data-state="true"] a:nth-child(3) {
    animation: bound .5s ease 2.0s forwards;
  }
  @keyframes bound {
    0%   { transform: translateY(-300%); opacity: 0; }
    35%  { transform: translateY(0); opacity: 1; }
    70%  { transform: translateY(-10%); opacity: 1; }
    100% { transform: translateY(0); opacity: 1; }
  }
`

export const Link = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin: 0 15px;
  background-color: #eee;
  font-size: 20px;
  color: #777;
  text-align: center;
  line-height: 44px;
  opacity: 0;
`
