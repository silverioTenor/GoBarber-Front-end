import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
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
`;
