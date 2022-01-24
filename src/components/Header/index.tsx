import { Container, Content, LogoContent, UserOptions } from './styles';
import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
import SearchInput from '../SearchInput';
import Navigation from '../Navigation';

const Header = () => {
  return (
    <>
      <Container>
        <Content>
          <LogoContent>
            <img src="/img/logo.png" alt="Ilustração de um Urso" />
          </LogoContent>
          <UserOptions>
            <FiUser size={25} />
            <FiHeart size={25} />
            <FiShoppingCart size={25} />
          </UserOptions>
        </Content>
        <SearchInput />
      </Container>
      <Navigation />
    </>
  );
};

export default Header;
