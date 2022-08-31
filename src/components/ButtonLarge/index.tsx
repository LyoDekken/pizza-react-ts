import React, { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonLargeProps = {
  value: string;
} & ButtonType;

const ButtonLarge = ({ value, ...props }: ButtonLargeProps) => {
  return <S.ButtonLarge {...props}>{value}</S.ButtonLarge>;
};

export default ButtonLarge;
