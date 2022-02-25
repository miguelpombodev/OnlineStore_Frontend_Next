import styled from 'styled-components';

export const Container = styled.header`
  background: var(--darker-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 50px 10px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const LogoContent = styled.div`
  display: flex;
  cursor: pointer;

  img {
    height: 70px;
    margin-right: 8px;
  }
`;

export const UserOptions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130px;
  margin-left: 30px;

  svg {
    color: var(--black);
    width: 40px;
    cursor: pointer;
    transition: 2s;

    &:hover:nth-child(2n + 1) {
      fill: var(--black);
    }

    &:hover:nth-child(2) {
      fill: var(--red);
    }
  }
`;
