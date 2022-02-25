import * as S from './styles';

interface SquaredTagProps {
  children: React.ReactNode;
}

const SquaredTag = ({ children }: SquaredTagProps) => (
  <S.Container>{children}</S.Container>
);
export default SquaredTag;
