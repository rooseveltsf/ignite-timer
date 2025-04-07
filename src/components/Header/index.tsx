import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";

import LogoIgnite from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="Ignite Timer" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
