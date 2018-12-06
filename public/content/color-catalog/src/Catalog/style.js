import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;

  animation: shadow .55s ease 2.3s forwards;
  @keyframes shadow {
    from { box-shadow: 0 0 0px rgba(0,0,0,.2); }
    to   { box-shadow: 0 0 10px rgba(0,0,0,.2); }
  }
`

export const Jacket = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
`

export const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      #6F9BD9,
      #8FF8DF
    );
    opacity: 0;
  }

  &::before { animation: mount-bg .65s ease 1.25s forwards; }
  @keyframes mount-bg {
    0%   { transform: scale(.8); opacity: 0; border-radius: 50%; }
    40%  { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); opacity: 1;  border-radius: 0%; }
  }
`

export const BgFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  div { position: absolute; background-color: #6F9BD9; }
  div:nth-child(1),
  div:nth-child(2) { width: 100%; height: 3px; left: 0; transform: translateX(100%); }
  div:nth-child(3),
  div:nth-child(4) { width: 3px; height: 100%; top: 0; transform: translateY(100%); }
  div:nth-child(1) { top: 0; }
  div:nth-child(2) { bottom: 0; }
  div:nth-child(3) { left: 0; }
  div:nth-child(4) { right: 0; }

  div:nth-child(1) {
    animation:
      slide-left .4s ease .5s forwards,
      slide-left .4s ease 1s forwards;
  }
  div:nth-child(2) {
    animation:
      slide-right .4s ease .5s forwards,
      slide-right .4s ease 1s forwards;
  }
  div:nth-child(3) { animation: slide-bottom .4s ease .75s forwards; }
  div:nth-child(4) { animation: slide-top .4s ease .75s forwards; }
  @keyframes slide-left {
    from { transform: translateX(100%); }
    to   { transform: translateX(-100%); }
  }
  @keyframes slide-right {
    from { transform: translateX(-100%); }
    to   { transform: translateX(100%); }
  }
  @keyframes slide-top {
    from { transform: translateY(100%); }
    to   { transform: translateY(-100%); }
  }
  @keyframes slide-bottom {
    from { transform: translateY(-100%); }
    to   { transform: translateY(100%); }
  }
`

export const Thumb = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  background-image: url(./thumb.png);
  background-position: center;
  background-size: cover;
  opacity: 0;

  animation: mount-thumb .65s ease 1.8s forwards;
  @keyframes mount-thumb {
    0%   { transform: scale(.8); opacity: 0; border-radius: 50%; }
    40%  { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); opacity: 1;  border-radius: 0%; }
  }
`

export const TextBox = styled.div`
  position: relative;
  width: 0px;
  height: 320px;
  background-color: #fff;
  box-sizing: border-box;
  overflow: hidden;

  animation: width0-320 .55s ease 2.3s forwards;
  @keyframes width0-320 {
    from { width: 0; }
    to   { width: 320px; }
  }
`

export const Title = styled.h3`
  position: relative;
  font-size: 20px;
  text-align: center;
  padding: 5px 0;
  color: #fff;
  margin: 20px;
  background-image: linear-gradient(
    120deg,
    #6F9BD9,
    #8FF8DF
  );
  opacity: 0;

  animation: slide-down .8s ease 2.8s forwards;
  @keyframes slide-down {
    from { transform: translateY(10px); opacity: 0; }
    to   { transform: translateY(0); opacity: 1; }
  }
`

export const Description = styled.p`
  position: relative;
  font-size: 12px;
  color: #777;
  padding: 30px;
  padding-top: 0;
  margin: 0;
  line-height: 1.8;
  opacity: 0;

  animation: slide-down .8s ease 3s forwards;
`

export const Date = styled.p`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12px;
  color: #aaa;
  margin: 0;
  opacity: 0;

  animation: slide-down .8s ease 3.2s forwards;
`
