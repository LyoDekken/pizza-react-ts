import logo from "assets/logo_patterns/logo.png";
import { RoutePath } from "types/routes";
import * as S from "./styles";
import { NavItem } from "./types";
import { ReactComponent as Logout } from "assets/icons/logout.svg";

interface MenuProps {
  active: RoutePath;
  navItems: NavItem[];
}

export default function Menu({ active, navItems }: MenuProps) {
  return (
    <S.Menu>
      <nav>
        <S.MenuLogo>
          <img src={logo} alt="Logo" />
        </S.MenuLogo>
        {navItems.map((item, index) => (
          <S.MenuItem key={`MenuItem-${index}`} active={item.path === active}>
            <S.MenuItemButton active={item.path === active}>
              {item.icon}
            </S.MenuItemButton>
          </S.MenuItem>
        ))}
      </nav>
      <S.MenuItemLogout>
        <Logout />
      </S.MenuItemLogout>
    </S.Menu>
  );
}
