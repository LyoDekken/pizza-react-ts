import { HTMLAttributes } from "react";
import { ReactComponent as Add } from "assets/icons/add.svg";
import * as S from "./styles";

type ManageTablesType = HTMLAttributes<HTMLDivElement>;

type ManageTablesProps = {} & ManageTablesType;

export default function ManageTables({ ...props }: ManageTablesProps) {
  return (
    <S.ManageTables {...props}>
      <S.ManageTablesTitle>Gerenciar Mesas</S.ManageTablesTitle>
      <S.ManageTablesSub>
        <b>Mesas</b>
      </S.ManageTablesSub>
      <S.ManageTablesContent>
        <S.ManageTablesContentAdd>
          <Add />
          <span>Adicionar mesa</span>
        </S.ManageTablesContentAdd>
        <S.ManageTablesContentAdd>
          <label htmlFor="tableId">Número da Mesa</label>
          <S.EditForm id="tableId" type="number" placeholder="01" />
        </S.ManageTablesContentAdd>
        {"Componente EditTable"}
      </S.ManageTablesContent>
      <S.ManageTablesActions>
        <S.ManageTablesActionsCancel>Cancelar</S.ManageTablesActionsCancel>
        <S.ManageTablesActionsSave>Salvar Mudanças</S.ManageTablesActionsSave>
      </S.ManageTablesActions>
    </S.ManageTables>
  );
}