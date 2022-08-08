import * as S from "./styles";

interface ProductItemListProps{
    children: React.ReactNode
}

export default function ProductItemList({children}: ProductItemListProps) {
  return (
    <section>
      <S.ProductItemListHeader>
        <S.ProductItemListHeaderTitle>
          Escolha os sabores
        </S.ProductItemListHeaderTitle>
        <S.ProductItemListHeaderSelect>
          <option value="default">Selecione a mesa</option>
          <option value="">Mesa</option>
        </S.ProductItemListHeaderSelect>
      </S.ProductItemListHeader>
      <S.ProductItemList>
        {children}
      </S.ProductItemList>
    </section>
  );
}
