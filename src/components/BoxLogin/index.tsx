import * as S from "./styles";
import logo from "assets/logo_patterns/logo.png";

export default function BoxLogin() {
  return (
    <S.BoxLogin>
      <S.BoxLoginLogo>
        <S.BoxLoginLogoText>
          <span>Pizza</span>
          <span>Fresh</span>
        </S.BoxLoginLogoText>
        <S.BoxLoginLogoImage src={logo} alt="Logo" />
      </S.BoxLoginLogo>
      <S.BoxLoginForm>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
      </S.BoxLoginForm>
    </S.BoxLogin>
  );
}
