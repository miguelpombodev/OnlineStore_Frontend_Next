import styled from 'styled-components';

export const Container = styled.nav`
  align-items: center;
  background: var(--black);
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const NavSection = styled.div`
  font-family: var(--font-default);
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  a {
    color: var(--golden-yellow);
    text-decoration: none;
  }
`;
