import * as S from "./styles";
import logo from "assets/logo_patterns/logo.png";
import ButtonLarge from "components/ButtonLarge";

import { HTMLAttributes, useState } from "react";

export type BoxLoginType = HTMLAttributes<HTMLDivElement>;

export interface BoxLoginProps {
  onSubmitData: (data: { nickname: string; password: string }) => void;
  errorMessage: string;
}

export default function BoxLogin({onSubmitData, errorMessage,}: BoxLoginProps) {

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (): void => {
    const data = { nickname, password };
    onSubmitData(data);
  };

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
        <input 
          type="text"
          placeholder="Nickname"
          value={nickname}
          onChange={({ target }) => setNickname(target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <ButtonLarge value="Entrar" type="button" onClick={handleSubmit} />
      </S.BoxLoginForm>
      {Boolean(errorMessage.length) && (
        <S.BoxLoginError>{errorMessage}</S.BoxLoginError>
      )}
    </S.BoxLogin>
  );
}
