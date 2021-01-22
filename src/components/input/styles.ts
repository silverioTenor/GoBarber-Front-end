import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background: #232129;
  border: 2px solid #232129;
  border-radius: 10px;

  & + div {
    margin-top: 8px;
  }

  input {
    width: 100%;
    padding: 16px 0;
    color: #f4ede8;
    background: transparent;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
    color: #666360;
  }
`;
