import * as S from "./styles";
import BoxLogin from "components/BoxLogin";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(RoutePath.HOME);
  };

  return (
    <S.Login>
      <S.LoginContent>
        <BoxLogin onSubmitData={handleSubmit} errorMessage={errorMessage} />{" "}
      </S.LoginContent>
    </S.Login>
  );
}
