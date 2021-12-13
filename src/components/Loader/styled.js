import styled, { keyframes } from 'styled-components';

const rotating = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);

  img {
    width: 60px;
    height: 60px;
    animation: ${rotating} 2s linear infinite;
  }
`;
