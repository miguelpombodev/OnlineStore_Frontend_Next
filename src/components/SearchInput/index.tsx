import { Container, Content } from './styles';
import { FiSearch } from 'react-icons/fi';

const SearchInput = () => {
  return (
    <Container>
      <FiSearch size={20} />
      <Content placeholder="Busque seu produto!" />
    </Container>
  );
};

export default SearchInput;
