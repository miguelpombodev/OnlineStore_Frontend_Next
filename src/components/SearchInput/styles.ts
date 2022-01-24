import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  background: var(--darker-white);
  border-radius: 12px;

  svg {
    margin-left: 10px;
  }
`;

export const Content = styled.input`
  font-size: 1rem;
  background: var(--darker-white);
  font-family: 'Roboto', sans-serif;
  padding: 15px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;
