import { Container, NavSection } from './styles';

interface IMenuOptions {
  title: string;
  url: string;
}

const menuOptions: IMenuOptions[] = [
  {
    title: 'Masculino',
    url: 'http://localhost:3000/'
  },
  {
    title: 'Feminino',
    url: 'http://localhost:3000/'
  },
  {
    title: 'Infantil',
    url: 'http://localhost:3000/'
  },
  {
    title: 'Calçados',
    url: 'http://localhost:3000/'
  },
  {
    title: 'Equipamentos',
    url: 'http://localhost:3000/'
  },
  {
    title: 'Outlet',
    url: 'http://localhost:3000/'
  }
];

const Navigation = () => {
  return (
    <Container>
      {menuOptions.map((opt, i) => (
        <NavSection key={i}>
          <a href={opt.url}>{opt.title}</a>
        </NavSection>
      ))}
    </Container>
  );
};

export default Navigation;
