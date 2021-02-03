import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const AnimationContainer = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  overflow: hidden;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;

  animation: ${appearFromRight} 1s;

  form {
    width: 340px;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 24px;
      font-size: 24px;
    }
  }

  > a {
    margin-top: 80px;
    display: flex;
    align-items: center;
    color: #f4ede8;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: cover;
`;
