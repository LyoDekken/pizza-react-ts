import * as S from "./styles";

export type OverlayProps = {
  children: React.ReactNode;
};

const Overlay = ({ children }: OverlayProps) => {
  return <S.Overlay>{children}</S.Overlay>;
};

export default Overlay;
