import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-around;
  background: var(--darker-white);
  padding: 20px;
  width: 100%;
`;

export const Departments = styled.div``;

export const Institutional = styled.div``;

export const UserAccount = styled.div``;

export const Heading = styled.h2`
  font-family: var(--font-default);
  color: var(--black);
  margin-bottom: 10px;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const Link = styled.a`
  font-family: var(--font-default);
  font-size: 1.05rem;
  color: var(--white);

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: var(--white);
  }
`;
