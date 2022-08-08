import * as S from "./styles";
import React, { HTMLAttributes } from "react";

export interface OrderItemListProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  list: React.ReactNode;
}

export type DivType = HTMLAttributes<HTMLDivElement>;

export default function OrderItemList({
  header,
  list,
  footer,
  ...props
}: OrderItemListProps) {
  return (
    <div {...props}>
      {header && <S.OrderItemListTitle> {header} </S.OrderItemListTitle>}
      <S.OrderItemList role="listbox">{list}</S.OrderItemList>
      {footer && <footer> {footer} </footer>}
    </div>
  );
}
