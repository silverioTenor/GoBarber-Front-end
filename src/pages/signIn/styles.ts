import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;

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

    input {
      width: 100%;
      padding: 16px;
      background: #232129;
      border: 2px solid #232129;
      border-radius: 10px;

      & + input {
        margin-top: 8px;
      }
    }

    button {
      width: 100%;
      padding: 16px;
      margin-top: 24px;
      font-weight: 500;
      color: #312e38;
      background: #ff9000;
      border-radius: 10px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      margin-top: 24px;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    margin-top: 80px;
    display: flex;
    align-items: center;
    color: #ff9000;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
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
