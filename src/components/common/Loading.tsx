import styled, { keyframes } from 'styled-components';

const FontBounce = keyframes` 
  100% {
    top: -10px;
    text-shadow: 0 1px 0 #CCC,
                 0 2px 0 #CCC,
                 0 3px 0 #CCC,
                 0 4px 0 #CCC,
                 0 5px 0 #CCC,
                 0 6px 0 #CCC,
                 0 7px 0 #CCC,
                 0 8px 0 #CCC,
                 0 9px 0 #CCC,
                 0 50px 25px rgba(0, 0, 0, .2);
  }
`;
const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.7);

  span {
    position: relative;
    top: 20px;
    display: inline-block;
    animation: ${FontBounce} 0.3s ease infinite alternate;
    font-size: 3rem;
    color: #fff;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
      0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent,
      0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);

    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      animation-delay: 0.3s;
    }
    &:nth-child(5) {
      animation-delay: 0.4s;
    }
    &:nth-child(6) {
      animation-delay: 0.5s;
    }
    &:nth-child(7) {
      animation-delay: 0.6s;
    }
    &:nth-child(8) {
      animation-delay: 0.7s;
    }
  }
`;

interface ILoadingProps {
  isLoading?: boolean;
}
function Loading({ isLoading }: ILoadingProps) {
  return isLoading ? (
    <Background>
      <span>L</span>
      <span>o</span>
      <span>a</span>
      <span>d</span>
      <span>i</span>
      <span>n</span>
      <span>g</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </Background>
  ) : (
    <></>
  );
}

export default Loading;
