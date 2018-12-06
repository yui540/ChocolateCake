import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  width: 350px;
  transform: translate(-50%, -50%);
`

export const MessageForm = styled.div`
  position: relative;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  width: 350px;
  box-sizing: border-box;
  display: none;
  overflow: hidden;

  &[data-show="true"] {
    display: block;
    animation: show-shadow .5s cubic-bezier(0.04, 0.2, 0.15, 1.04) 0s forwards;
  }
  &[data-show="true"] textarea {
    animation: show-message-form 0.8s cubic-bezier(0.04, 0.2, 0.15, 1.04) 0.5s forwards;
  }
  &[data-show="true"] div button:nth-child(1) {
    animation: show-message-form 0.8s cubic-bezier(0.04, 0.2, 0.15, 1.04) 0.7s forwards;
  }
  &[data-show="true"] div button:nth-child(2) {
    animation: show-message-form 0.8s cubic-bezier(0.04, 0.2, 0.15, 1.04) 0.9s forwards;
  }

  @keyframes show-shadow {
    0%   { opacity: 0; transform: scale(0.6); }
    50%  { transform: scale(1.05); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes show-message-form {
    from { transform: translateY(20px); opacity: 0; }
    to   { transform: translateY(0px); opacity: 1; }
  }
`

export const Textarea = styled.textarea`
  appearance: none;
  border: none;
  width: 100%;
  height: 250px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  font-size: 20px;
  letter-spacing: .1em;
  color: #999;
  opacity: 0;
  transition: all 0.5s ease 0s;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(0,0,0,0.1) inset;
  }
  &::-webkit-input-placeholder {
    color: #c0c0c0;
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
`

export const CancelButton = styled.button`
  appearance: none;
  border: none;
  position: relative;
  width: calc(50% - 5px);
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  line-height: 40px;
  background-color: #bbb;
  margin-right: 10px;
  padding: 0;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  opacity: 0;

  &::after {
    content: "やめる";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &:focus { outline: none; }

  &:hover div:nth-child(1)::before,
  &:hover div:nth-child(1)::after { transform: rotate(0deg); }

  &[data-state="true"] div:nth-child(2) {
    animation: show-effect 0.5s cubic-bezier(0.85, 0.02, 0.11, 1.01) 0s forwards;
  }
`

export const CancelButtonBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: left top;
    transform: rotate(90deg);
  }
  &::before {
    background-color: rgba(255,255,255,.6);
    transition: all 0.45s cubic-bezier(0.85, 0.02, 0.11, 1.01) 0s;
  }
  &::after {
    background-color: #bbb;
    transition: all 0.45s cubic-bezier(0.85, 0.02, 0.11, 1.01) .1s;
  }
`

export const SendButton = styled.button`
  appearance: none;
  border: none;
  position: relative;
  width: calc(50% - 5px);
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  line-height: 40px;
  padding: 0;
  background-color: #BC678A;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  opacity: 0;

  &::after {
    content: "届ける";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &:focus { outline: none; }
  &:hover div:nth-child(1)::before,
  &:hover div:nth-child(1)::after { transform: rotate(0deg); }

  &[data-state="true"] div:nth-child(2) {
    animation: show-effect 0.5s cubic-bezier(0.85, 0.02, 0.11, 1.01) 0s forwards;
  }
`

export const SendButtonBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: left top;
    transform: rotate(90deg);
  }
  &::before {
    background-color: rgba(255,255,255,.6);
    transition: all 0.45s cubic-bezier(0.85, 0.02, 0.11, 1.01) 0s;
  }
  &::after {
    background-color: #BC678A;
    transition: all 0.45s cubic-bezier(0.85, 0.02, 0.11, 1.01) .1s;
  }
`

export const Effect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  transform: translate(-50%, -50%) scale(0);
  border-radius: 50%;
  background-color: #fff;
  transition: all 0.45s cubic-bezier(0.85, 0.02, 0.11, 1.01) 0s;

  @keyframes show-effect {
    0%   { transform: translate(-50%, -50%) scale(0); opacity: .6; }
    40%  { opacity: .6; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
  }
`

export const ResultLabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: translateY(-100%);

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: right top;
    transform: rotate(90deg);
  }
  &::before {
    background-color: #fff;
    transition: all .5s cubic-bezier(0.81, 0.01, 0.22, 1.03) .3s;
  }
  &::after {
    background-color: #4AA9A4;
    transition: all .5s cubic-bezier(0.81, 0.01, 0.22, 1.03) .4s;
  }

  h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    letter-spacing: .1em;
    margin: 0;
    color: #fff;
    text-align: center;
    z-index: 1;
    opacity: 0;
    transition: all 1.5s ease 1s;
  }

  &[data-state="true"] { transform: translateY(0); }
  &[data-state="true"]::before,
  &[data-state="true"]::after { transform: rotate(0deg); }
  &[data-state="true"] h3 { opacity: 1; }
`

export const OpenButton = styled.button`
  margin: 0 auto;
  border: none;
  appearance: none;
  border-radius: 5px;
  font-size: 20px;
  color: #fff;
  padding: 15px 40px;
  display: block;
  cursor: pointer;
  font-weight: bold;
  background-color: #BC678A;
  box-shadow: 0px 0px 10px rgba(0,0,0,.4);
  transition: all 0.5s ease 0s;

  &[data-state="true"] { display: none; }
  &:hover { box-shadow: 7px 7px 10px rgba(0,0,0,.2); }
`
