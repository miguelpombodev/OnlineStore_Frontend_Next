import * as S from './styles';

import { Departments, Institutional, UserAccount } from './mock/data';

const Footer = () => (
  <S.Wrapper>
    <S.Departments>
      <S.Heading>Departamentos</S.Heading>
      <S.List>
        {Departments.map((department, idx) => (
          <S.ListItem key={idx}>
            <S.Link href={department.url}>{department.name}</S.Link>
          </S.ListItem>
        ))}
      </S.List>
    </S.Departments>
    <S.Institutional>
      <S.Heading>Institucional</S.Heading>

      <S.List>
        {Institutional.map((department, idx) => (
          <S.ListItem key={idx}>
            <S.Link href={department.url}>{department.name}</S.Link>
          </S.ListItem>
        ))}
      </S.List>
    </S.Institutional>
    <S.UserAccount>
      <S.Heading>Minha Conta</S.Heading>

      <S.List>
        {UserAccount.map((department, idx) => (
          <S.ListItem key={idx}>
            <S.Link href={department.url}>{department.name}</S.Link>
          </S.ListItem>
        ))}
      </S.List>
    </S.UserAccount>
  </S.Wrapper>
);
export default Footer;
