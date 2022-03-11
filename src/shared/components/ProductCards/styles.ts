import styled from 'styled-components';

export const Container = styled.div`
  background: var(--white);
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 10px;
  min-height: 440px;
  padding: 20px;
  width: 300px;
`;
export const StockContainer = styled.div`
  display: flex;
  margin: 0 0 5px 0;
`;

export const StockInfo = styled.p`
  color: var(--red);
  font-size: 0.65rem;
`;

export const StockNumber = styled.p`
  color: var(--red);
  font-size: 1rem;
  font-weight: 700;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Image = styled.img`
  border-radius: 10px;
  height: auto;
  width: 100%;
`;

export const Title = styled.a`
  color: var(--gray-darker);
  font-family: var(--font-default);
  font-size: 1.25rem;
  margin-top: 10px;
  min-height: 50px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PriceFrom = styled.p`
  color: var(--gray);
  text-decoration: line-through;
`;

export const Price = styled.p`
  color: var(--black-lighter);
  font-size: 1.5rem;
`;

export const PaidInCash = styled.p`
  color: var(--gray);
`;

export const ProductRatingAmount = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;
