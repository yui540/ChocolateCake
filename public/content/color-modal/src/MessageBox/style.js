import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  top: 50%; left: 50%;
  width: 500px;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 30px #ccc;
  border-radius: 10px;
  opacity: 0;

  &[data-close="true"] {
    opacity: 1;
    animation: hidden-container 0.5s cubic-bezier(0.05, 0.24, 0.16, 1.01) 0.4s forwards;
  }
  @keyframes hidden-container {
    from { transform: translate(-50%, -50%); opacity: 1; }
    to   { transform: translate(-50%, -30%); opacity: 0; }
  }

  animation: show-container 0.5s cubic-bezier(0.05, 0.24, 0.16, 1.01) 0.5s forwards;
  @keyframes show-container {
    from { transform: translate(-50%, -30%); opacity: 0; }
    to   { transform: translate(-50%, -50%); opacity: 1; }
  }

  &[data-state="true"] article {
    animation: open-message 0.8s cubic-bezier(0.76, 0.02, 0.25, 1) 0s forwards;
  }
  @keyframes open-message {
    from { height: 3px; }
    to   { height: 300px; }
  }

  &[data-state="true"] header {
    animation: close-header 0.8s cubic-bezier(0.76, 0.02, 0.25, 1) 0s forwards;
  }
  &[data-state="true"] header h3 {
    animation: fadeout 0.8s cubic-bezier(0.76, 0.02, 0.25, 1) 0s forwards;
  }
  @keyframes close-header {
    from { height: 200px; }
    to   { height: 70px; }
  }
  @keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  &[data-state="true"] footer div button:nth-child(2) {
    opacity: 1;
    transform: scale(1);
    animation: hidden-button 0.5s cubic-bezier(0.76, 0.02, 0.25, 1) 0.6s forwards;
  }
  @keyframes hidden-button {
    from { transform: scale(1); }
    to   { transform: scale(0); }
  }
  &[data-state="true"] footer div button:nth-child(2)::before {
    animation: effect 0.4s ease 0s forwards;
  }
  &[data-close="true"] footer div button:nth-child(1)::before {
    animation: effect 0.4s ease 0s forwards;
  }
  @keyframes effect {
    0%   { transform: scale(1); opacity: 1; }
    50%  { opacity: 1; }
    100% { transform: scale(3); opacity: 0; }
  }

  &[data-state="true"] footer div button:nth-child(1) {
    opacity: 1;
    animation: move-button 0.5s cubic-bezier(0.76, 0.02, 0.25, 1) 0.6s forwards;
  }
  @keyframes move-button {
    from { transform: translateX(0); }
    to   { transform: translateX(77.5px); }
  }
`

export const TopBar = styled.header`
  width: 100%;
  height: 200px;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h3`
  position: relative;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  color: #444;
  text-align: center;
  background-color: #eee;
  margin: 0;
  padding: 5px 20px;
  opacity: 0;

  &::after {
    position: absolute;
    left: 50%;
    bottom: -15px;
    transform: translateX(-50%);
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: solid 15px #eee;
    border-left: solid 15px transparent;
    border-right: solid 15px transparent;
  }

  animation: show-title 0.6s cubic-bezier(0.05, 0.24, 0.16, 1.01) 0.8s forwards;
  @keyframes show-title {
    0%   { transform: translateY(100%); opacity: 0; }
    40%  { transform: translateY(-20%); opacity: 1; }
    100% { transform: translateY(0%); opacity: 1; }
  }
`

export const Message = styled.article`
  width: 100%;
  height: 3px;
  background-color: #eee;
  overflow: hidden;
`

export const Inner = styled.div`
  padding-top: 40px;
  padding-bottom: 60px;
`

export const LargeText = styled.h4`
  font-size: 20px;
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
`
//77.5
export const Text = styled.p`
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  letter-spacing: 5px;
  margin: 0;
`

export const BottomBar = styled.footer`
  width: 100%;
  height: 70px;
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  transform: translateY(-50%);
`

export const OkButton = styled.button`
  appearance: none;
  position: relative;
  width: 65px;
  height: 65px;
  padding: 0;
  margin: 0 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  opacity: 0;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #c45c66;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #c45c66;
    box-shadow: 0 0 10px #c45c66;
    background-image: url(./svg/ok.svg);
    background-size: auto 50%;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.4s ease 0s;
  }
  &:hover::after {
    box-shadow: 0 0 40px #c45c66;
    transform: scale(1.15);
  }
  &:focus { outline: none; }

  animation: show-title 0.6s cubic-bezier(0.05, 0.24, 0.16, 1.01) 1.3s forwards;
`

export const CancelButton = styled.button`
  appearance: none;
  position: relative;
  width: 65px;
  height: 65px;
  padding: 0;
  margin: 0 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  opacity: 0;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #00aca5;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #00aca5;
    box-shadow: 0 0 10px #00aca5;
    background-image: url(./svg/cancel.svg);
    background-size: auto 42%;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.4s ease 0s;
  }
  &:hover::after {
    box-shadow: 0 0 40px #00aca5;
    transform: scale(1.15);
  }
  &:focus { outline: none; }

  animation: show-title 0.6s cubic-bezier(0.05, 0.24, 0.16, 1.01) 1.2s forwards;
`
