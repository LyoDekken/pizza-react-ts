import * as S from "./styles";

import BoxLogin from "components/BoxLogin";

import { useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";

export default function Login() {

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(RoutePath.HOME);
  };

  return (
    <S.Login>
      <S.LoginContent>
        <BoxLogin/>
      </S.LoginContent>
    </S.Login>
  );
}