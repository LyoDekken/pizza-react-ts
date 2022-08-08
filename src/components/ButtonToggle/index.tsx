import * as S from "./styles";
import React, { ButtonHTMLAttributes } from "react";

export type ButtonToggleProps = {
  value: string;
  active?: boolean;
};

export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonToggle({
  value,
  active = false,
  ...props
}: ButtonToggleProps) {
  return (
    <S.ButtonToggle {...props} active={active}>
      {value}
    </S.ButtonToggle>
  );
}
