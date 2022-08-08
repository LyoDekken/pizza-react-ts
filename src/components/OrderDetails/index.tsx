import * as S from "./styles";

export default function OrderDetails() {
  return (
    <S.OrderDetails>
      <S.OrderDetailsTitle>Detalhes do Pedido</S.OrderDetailsTitle>
      <S.OrderDetailsButtonGroup></S.OrderDetailsButtonGroup>
      <S.OrderDetailsList>
        <p>Itens do pedido</p>
      </S.OrderDetailsList>
    </S.OrderDetails>
  );
}
