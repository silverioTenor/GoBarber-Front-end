import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    color: #3172b7;
    background: #ebf8ff;
  `,
  success: css`
    color: #2e656a;
    background: #e6fffa;
  `,
  error: css`
    color: #c53030;
    background: #fddede;
  `,
};

// eslint-disable-next-line prettier/prettier
export const Container = styled(animated.div) <ToastProps>`
  width: 360px;
  margin-bottom: 8px;
  padding: 16px 30px 16px 16px;
  display: flex;
  position: relative;

  ${props => toastTypeVariations[props.type || 'info']}

  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    strong,
    p {
      ${props => toastTypeVariations[props.type || 'info']}
    }

    p {
      line-height: 20px;
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    color: inherit;
    background: transparent;
    border: 0;
    opacity: 0.6;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
