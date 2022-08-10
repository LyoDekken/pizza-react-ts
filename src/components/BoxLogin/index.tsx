import * as S from "./styles";

import logo from "assets/logo_patterns/logo.png";
import ButtonLarge from "components/ButtonLarge";

import { HTMLAttributes, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-hot-toast";

export type BoxLoginType = HTMLAttributes<HTMLDivElement>;

// interface LoginProps {
//   setLogged: Dispatch<SetStateAction<boolean>>;
// }

export default function BoxLogin() {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const handleLogin = () => {
    if (email === "admin" && password === "admin") {
      toast.success("Login bem sucedido!");
      console.log("Login bem sucedido!")
      //setLogged(true);
      return;
    }
    toast.error("Usuário ou senha incorretos.");
    console.log("Usuário ou senha incorretos.")
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
          placeholder="E-mail"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <ButtonLarge value="Entrar" type="button" onClick={handleLogin} />
      </S.BoxLoginForm>
    </S.BoxLogin>
  );
}
