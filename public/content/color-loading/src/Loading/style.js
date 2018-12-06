import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250px;
  height: 250px;
  transform: translate(-50%, -50%);
`

export const Block = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  div {
    width: 25%;
    height: 25%;
    background-color: #fff;
    transform: scale(0.2);
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0,0,0,.06);
  }

  div:nth-child(1)  { animation: show-down 1.8s ease-in-out 0s infinite; }
  div:nth-child(2)  { animation: show-down 1.8s ease-in-out 0.2s infinite; }
  div:nth-child(5)  { animation: show-down 1.8s ease-in-out 0.2s infinite; }
  div:nth-child(3)  { animation: show-down 1.8s ease-in-out 0.4s infinite; }
  div:nth-child(6)  { animation: show-down 1.8s ease-in-out 0.4s infinite; }
  div:nth-child(9)  { animation: show-down 1.8s ease-in-out 0.4s infinite; }
  div:nth-child(4)  { animation: show-down 1.8s ease-in-out 0.6s infinite; }
  div:nth-child(7)  { animation: show-down 1.8s ease-in-out 0.6s infinite; }
  div:nth-child(10) { animation: show-down 1.8s ease-in-out 0.6s infinite; }
  div:nth-child(13) { animation: show-down 1.8s ease-in-out 0.6s infinite; }
  div:nth-child(8)  { animation: show-down 1.8s ease-in-out 0.8s infinite; }
  div:nth-child(11) { animation: show-down 1.8s ease-in-out 0.8s infinite; }
  div:nth-child(14) { animation: show-down 1.8s ease-in-out 0.8s infinite; }
  div:nth-child(12) { animation: show-down 1.8s ease-in-out 1s infinite; }
  div:nth-child(15) { animation: show-down 1.8s ease-in-out 1s infinite; }
  div:nth-child(16) { animation: show-down 1.8s ease-in-out 1.2s infinite; }
  @keyframes show-down {
    0%   { transform: scale(.2); }
    50%  { transform: scale(.9); }
    100% { transform: scale(.2); }
  }
`

export const Text = styled.h3`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  letter-spacing: .2em;
  color: #999;

  span { opacity: 0; }

  span:nth-child(1) { animation: fade 1.8s ease-in-out 0s infinite; }
  span:nth-child(2) { animation: fade 1.8s ease-in-out 0.2s infinite; }
  span:nth-child(3) { animation: fade 1.8s ease-in-out 0.4s infinite; }
  span:nth-child(4) { animation: fade 1.8s ease-in-out 0.6s infinite; }
  span:nth-child(5) { animation: fade 1.8s ease-in-out 0.8s infinite; }
  span:nth-child(6) { animation: fade 1.8s ease-in-out 1s infinite; }
  span:nth-child(7) { animation: fade 1.8s ease-in-out 1.2s infinite; }
  @keyframes fade {
    0%   { opacity: 0; }
    50%  { opacity: 1; }
    100% { opacity: 0; }
  }
`

export const Frame = styled.div`
  position: absolute;
  top: -9px;
  left: -9px;
  width: calc(100% + 18px);
  height: calc(100% + 18px);
  overflow: hidden;

  div {
    position: absolute;
    background-color: #aaa;
  }
  div:nth-child(1),
  div:nth-child(2) { width: 100%; height: 3px; left: 0; transform: translateX(100%); }
  div:nth-child(3),
  div:nth-child(4) { width: 3px; height: 100%; top: 0; transform: translateY(100%); }
  div:nth-child(1) { top: 0; }
  div:nth-child(2) { bottom: 0; }
  div:nth-child(3) { left: 0; }
  div:nth-child(4) { right: 0; }

  div:nth-child(1) { animation: slide-left 1.4s linear 0s forwards; }
  div:nth-child(3) { animation: slide-bottom 1.4s linear 1.4s forwards; }
  div:nth-child(2) { animation: slide-right 1.4s linear 2.8s forwards; }
  div:nth-child(4) { animation: slide-top 1.4s linear 4.2s forwards; }
  @keyframes slide-left {
    from { transform: translateX(100%); }
    to   { transform: translateX(0); }
  }
  @keyframes slide-right {
    from { transform: translateX(-100%); }
    to   { transform: translateX(0); }
  }
  @keyframes slide-top {
    from { transform: translateY(100%); }
    to   { transform: translateY(0); }
  }
  @keyframes slide-bottom {
    from { transform: translateY(-100%); }
    to   { transform: translateY(0); }
  }
`

export const Result = styled.div`
  position: absolute;
  position: absolute;
  top: -10px;
  left: -10px;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  display: flex;
  overflow: hidden;

  div {
    width: 20%;
    height: 100%;
    background-color: #fff;
    transform: translateY(100%);
  }

  div:nth-child(1) { animation: slide-top .5s cubic-bezier(0.7,-0.01, 0.32, 1.01) 5.7s forwards; }
  div:nth-child(2) { animation: slide-top .5s cubic-bezier(0.7,-0.01, 0.32, 1.01) 5.8s forwards; }
  div:nth-child(3) { animation: slide-top .5s cubic-bezier(0.7,-0.01, 0.32, 1.01) 5.9s forwards; }
  div:nth-child(4) { animation: slide-top .5s cubic-bezier(0.7,-0.01, 0.32, 1.01) 5.8s forwards; }
  div:nth-child(5) { animation: slide-top .5s cubic-bezier(0.7,-0.01, 0.32, 1.01) 5.7s forwards; }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      145deg,
      #ff66cc,
      #ffcc73
    );
    opacity: 0;
  }

  &::after {
    animation:
      show 2s ease 5.9s forwards,
      hue 8s ease-in-out 5.9s infinite;
  }
  @keyframes show {
    from { opacity: 0; }
    to   { opacity: .2; }
  }
  @keyframes hue {
    0%   { filter: hue-rotate(0deg); }
    50%  { filter: hue-rotate(360deg); }
    100% { filter: hue-rotate(0deg); }
  }

  &::before {
    content: "complete";
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    font-size: 32px;
    letter-spacing: .2em;
    color: #aaa;
    text-align: center;
    z-index: 1;
    opacity: 0;
  }

  &::before { animation: popup .5s ease 6.3s forwards; }
  @keyframes popup {
    0%   { transform: translateY(50%); opacity: 0; }
    50%  { transform: translateY(-75%); opacity: 1; }
    100% { transform: translateY(-50%); opacity: 1; }
  }
`
