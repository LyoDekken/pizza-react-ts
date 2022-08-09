import * as S from "./styles";
import { ProductResponse } from "types/Products";

interface ProductItemProps {
  product: ProductResponse;
  onSelect: (data: ProductResponse) => void;
}

export default function ProductItem({ product, onSelect }: ProductItemProps) {
  return (
    <S.ProductItem role="listitem" onClick={() => onSelect(product)}>
      <S.ProductItemImage
        src={product.image}
        alt={`Pizza de ${product.name}`}
      />
      <div>
        <S.ProductItemName>{product.name}</S.ProductItemName>
        <S.ProductItemPrice>{product.price}</S.ProductItemPrice>
        <S.ProductItemDescription>
          {product.description}
        </S.ProductItemDescription>
      </div>
    </S.ProductItem>
  );
}
