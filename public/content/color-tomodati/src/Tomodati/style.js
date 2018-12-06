import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 350px;
  transform: translate(-50%, -50%);
`

export const Frame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  div { position: absolute; background-color: #6699DE; }
  div:nth-child(1),
  div:nth-child(2) { width: 100%; height: 2px; left: 0; }
  div:nth-child(3),
  div:nth-child(4) { width: 2px; height: 100%; top: 0; }
  div:nth-child(1) { top: 0; transform: translateX(-100%); }
  div:nth-child(2) { bottom: 0; transform: translateX(100%); }
  div:nth-child(3) { right: 0; transform: translateY(-100%); }
  div:nth-child(4) { left: 0; transform: translateY(100%); }

  div:nth-child(1) { animation: slide-1 .8s cubic-bezier(0.76,-0.01, 0.25, 1) .5s forwards; }
  div:nth-child(2) { animation: slide-2 .8s cubic-bezier(0.76,-0.01, 0.25, 1) .5s forwards; }
  div:nth-child(3) { animation: slide-3 .8s cubic-bezier(0.76,-0.01, 0.25, 1) .5s forwards; }
  div:nth-child(4) { animation: slide-4 .8s cubic-bezier(0.76,-0.01, 0.25, 1) .5s forwards; }
  @keyframes slide-1 {
    0%   { transform: translateX(-100%); }
    50%  { transform: translateX(0%); }
    100% { transform: translateX(100%); }
  }
  @keyframes slide-2 {
    0%   { transform: translateX(100%); }
    50%  { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }
  @keyframes slide-3 {
    0%   { transform: translateY(100%); }
    50%  { transform: translateY(0%); }
    100% { transform: translateY(-100%); }
  }
  @keyframes slide-4 {
    0%   { transform: translateY(-100%); }
    50%  { transform: translateY(0%); }
    100% { transform: translateY(100%); }
  }
`

export const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0px 0px 0px rgba(0,0,0,.1);
  /*box-shadow: 12px 12px 20px rgba(0,0,0,.1);*/

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    opacity: 0;
  }
  &::before { background-color: #6699DE; }
  &::after  { background-image: linear-gradient(120deg, #6699DE, #66FFDE); }

  &::before { animation: show-bg .5s ease 1.2s forwards; }
  &::after {
    animation:
      fadein 2s ease 1.6s forwards,
      gradient 2s ease 1.6s forwards;
  }
  @keyframes show-bg {
    0%   { transform: scale(0.8); opacity: 0; }
    50%  { transform: scale(1.05); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes gradient {
    from { box-shadow: 0px 0px 0px rgba(0,0,0,.1); }
    to   { box-shadow: 12px 12px 20px rgba(0,0,0,.1); }
  }
`

export const Card = styled.div`
  position: relative;
  padding: 20px;
  padding-top: 60px;
  box-sizing: border-box;
`

export const Thumb = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  opacity: 0;

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
  &::before { transform: scale(1.2); background-color: rgba(255,255,255,.5); }
  &::after {
    background-image: url(./yui540.png);
    background-position: center;
    background-size: cover;
  }

  animation: show-thumb .5s ease 1.4s forwards;
  @keyframes show-thumb {
    0%   { transform: scale(0.4); opacity: 0; }
    50%  { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
`

export const Description = styled.div`
  margin: 40px 0;

  p {
    font-size: 22px;
    color: #fff;
    text-align: center;
    line-height: 1.6;
    letter-spacing: .1em;
    margin: 0;
    opacity: 0;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    width: 2px;
    height: 20px;
    background-color: rgba(255,255,255,.5);
    margin: 10px auto;
    opacity: 0;
  }

  p { animation: show-p .5s ease 1.55s forwards; }
  &::before { animation: show-before .5s ease 2s forwards; }
  &::after  { animation: show-after .5s ease 2s forwards; }
  @keyframes show-p {
    0%   { transform: scale(0.6); opacity: 0; }
    50%  { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes show-before {
    0%   { transform: translateY(-100%); opacity: 0; }
    100% { transform: translateY(0%); opacity: 1; }
  }
  @keyframes show-after {
    0%   { transform: translateY(100%); opacity: 0; }
    100% { transform: translateY(0%); opacity: 1; }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const OkButton = styled.button`
  appearace: none;
  border: none;
  position: relative;
  background-color: #fff;
  border-radius: 30px;
  width: calc(50% - 10px);
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;
  padding: 0;
  opacity: 0;

  &::after {
    position: relative;
    content: "いいよ";
    display: block;
    color: #00ACA5;
    transition: all .35s ease 0s;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00ACA5;
    border-radius: 30px;
    transform: translateX(-100%);
    transition: all .35s cubic-bezier(0.76,-0.01, 0.25, 1) 0s;
  }

  &:hover::after  { color: #fff; }
  &:hover::before { transform: translateX(0); }

  animation: show-button .5s ease 1.7s forwards;
  @keyframes show-button {
    0%   { transform: scale(0.4); opacity: 0; }
    50%  { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
`

export const CancelButton = styled.button`
  appearace: none;
  border: none;
  position: relative;
  background-color: #fff;
  border-radius: 30px;
  width: calc(50% - 10px);
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
  overflow: hidden;
  opacity: 0;

  &::after {
    position: relative;
    content: "だめ";
    display: block;
    color: #E48089;
    transition: all .35s ease 0s;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #E48089;
    border-radius: 30px;
    transform: translateX(100%);
    transition: all .35s cubic-bezier(0.76,-0.01, 0.25, 1) 0s;
  }

  &:hover::after  { color: #fff; }
  &:hover::before { transform: translateX(0); }

  animation: show-button .5s ease 1.85s forwards;
`

export const CloseButton = styled.button`
appearace: none;
border: none;
position: absolute;
display: none;
`
