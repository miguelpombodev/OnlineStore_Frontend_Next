import formatCurrency from 'shared/Utils/formatCurrency';
import SquaredTag from '../SquaredTag';
import { AiOutlineStar } from 'react-icons/ai';
import * as S from './styles';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import formatLowerSnakeCaseName from 'shared/Utils/formatLowerSnakeCaseName';

interface ProductCardsProps {
  Name: string;
  Value: number;
  ProductUrl: string;
  StockAmount: number;
}

const ProductCards = ({
  Name,
  ProductUrl,
  Value,
  StockAmount
}: ProductCardsProps) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    mount && (
      <Link href={`/produto/${formatLowerSnakeCaseName(Name)}`}>
        <S.Container>
          <S.Image src={ProductUrl} />
          <S.Title>{Name}</S.Title>
          <S.InfoContainer>
            <S.PriceContainer>
              <S.PriceFrom>De: {formatCurrency(Value)}</S.PriceFrom>
              <S.Price>{formatCurrency(Value)}</S.Price>
              <S.PaidInCash>À vista no PIX</S.PaidInCash>
            </S.PriceContainer>
            <S.ProductRatingAmount>
              <S.StockContainer>
                <SquaredTag>
                  <S.StockInfo>RESTAM</S.StockInfo>
                  <S.StockNumber>{StockAmount}</S.StockNumber>
                  <S.StockInfo>UNID</S.StockInfo>
                </SquaredTag>
              </S.StockContainer>
              <div>
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            </S.ProductRatingAmount>
          </S.InfoContainer>
        </S.Container>
      </Link>
    )
  );
};

export default ProductCards;
