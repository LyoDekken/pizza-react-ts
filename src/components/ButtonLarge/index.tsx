import * as S from "./styles";
import React, { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonLargeProps = {
    value: string;
} & ButtonType;

//O ...props refere-se aos valores dentro do ButtonLargeProps
//Ou seja {value, e type}

export default function ButtonLarge({ value, ...props}: ButtonLargeProps) {
  return <S.ButtonLarge {...props}>{value}</S.ButtonLarge>
  //O value representa o que está dentro das "" de value
  //
};

