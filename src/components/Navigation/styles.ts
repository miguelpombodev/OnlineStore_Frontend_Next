import styled from 'styled-components';

export const Container = styled.nav`
  align-items: center;
  background: var(--white);
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const NavSection = styled.div`
  font-family: var(--font-default);
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  a {
    color: var(--gray);
    text-decoration: none;
    &:hover {
      color: var(--black);
      transition: color 0.3s linear;
    }
  }
`;
