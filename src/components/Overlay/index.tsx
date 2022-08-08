import React from "react";
import * as S from "./styles";

export interface OverlayProps {
  children: React.ReactNode;
};

export default function Overlay({ children }: OverlayProps) {
  return <S.Overlay>{children}</S.Overlay>;
};

