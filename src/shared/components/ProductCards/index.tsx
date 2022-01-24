import * as S from './styles';

interface ProductCardsProps {
  Name: string;
  Value: number;
  ProductUrl: string;
}

const ProductCards = ({ Name, ProductUrl, Value }: ProductCardsProps) => {
  return (
    <S.Container>
      <S.Image src={ProductUrl} />
      <S.InfoContainer>
        <S.Title>{Name}</S.Title>
        <S.Price>{Value}</S.Price>
      </S.InfoContainer>
    </S.Container>
  );
};

export default ProductCards;
