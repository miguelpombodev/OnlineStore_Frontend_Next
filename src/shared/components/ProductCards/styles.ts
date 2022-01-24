import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  width: 300px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  @media (min-width: 769px) {
    width: 280px;
    height: 280px;
  }
`;

export const Title = styled.a`
  font-family: var(--font-default);
  font-size: 1.25rem;
  color: var(--gray-darker);
`;

export const Price = styled.span`
  font-family: var(--font-default);
  font-size: 1.5rem;
  color: var(--black-lighter);
`;
