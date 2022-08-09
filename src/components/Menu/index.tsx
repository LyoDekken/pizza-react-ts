import logo from "assets/logo_patterns/logo.png";
import { RoutePath } from "types/routes";
import * as S from "./styles";
import { NavItem } from "./types";
import { ReactComponent as Logout } from "assets/icons/logout.svg";

interface MenuProps {
  active: RoutePath;
  navItems: NavItem[];
  onNavigate: (data: RoutePath) => void;
  onLogout: () => void;
}

export default function Menu({
  active,
  navItems,
  onNavigate,
  onLogout,
}: MenuProps) {
  return (
    <S.Menu>
      <nav>
        <S.MenuLogo>
          <img src={logo} alt="Logo" />
        </S.MenuLogo>
        {navItems.map((item, index) => (
          <S.MenuItem key={`MenuItem-${index}`} active={item.path === active}>
            <S.MenuItemButton
              active={item.path === active}
              onClick={() => onNavigate(item.path)}
            >
              {item.icon}
            </S.MenuItemButton>
          </S.MenuItem>
        ))}
      </nav>
      <S.MenuItemLogout onClick={onLogout}>
        <Logout />
      </S.MenuItemLogout>
    </S.Menu>
  );
}
