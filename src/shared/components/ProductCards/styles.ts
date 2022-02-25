import styled from 'styled-components';

export const Container = styled.div`
  background: var(--white);
  border-radius: 20px;
  display: block;
  margin: 10px;
  padding: 20px;
  width: 300px;
`;
export const StockContainer = styled.div`
  display: flex;
  margin: 0 0 10px 0;
`;

export const StockInfo = styled.p`
  color: var(--red);
  font-size: 0.65rem;
`;

export const StockNumber = styled.p`
  color: var(--red);
  font-weight: 700;
  font-size: 1rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  border-radius: 10px;
  height: auto;
  width: 100%;
`;

export const Title = styled.a`
  font-family: var(--font-default);
  font-size: 1.25rem;
  color: var(--gray-darker);
  margin-top: 10px;
  min-height: 50px;
`;

export const PriceFrom = styled.p`
  text-decoration: line-through;
  color: var(--gray);
`;

export const Price = styled.p`
  font-size: 1.5rem;
  color: var(--black-lighter);
`;

export const PaidInCash = styled.p`
  color: var(--gray);
`;
