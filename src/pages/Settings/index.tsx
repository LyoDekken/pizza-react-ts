import Menu from "components/Menu";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";
import * as S from "./styles";
import { Outlet } from "react-router-dom";

export default function Settings () {
  return (
    <S.Settings>
      <Menu active={RoutePath.SETTINGS} navItems={navigationItems} />
      <S.SettingsPage>
        <header>
          <S.SettingsPageHeaderTitle>Configurações</S.SettingsPageHeaderTitle>
        </header>
        <S.SettingsContent>
          <S.SettingsContentSidebar>
            {"Componente NavColumn"}
          </S.SettingsContentSidebar>
          <S.SettingsContentBox>
            <S.SettingsContentBoxEmpty>
              Selecione uma categoria
            </S.SettingsContentBoxEmpty>
            <Outlet />
          </S.SettingsContentBox>
        </S.SettingsContent>
      </S.SettingsPage>
    </S.Settings>
  );
};

