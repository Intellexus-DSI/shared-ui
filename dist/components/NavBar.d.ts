import React, { ReactNode } from "react";
import "../styles/NavBar.css";
interface NavBarProps {
    logoutComponent: ReactNode;
}
declare const NavBar: ({ logoutComponent }: NavBarProps) => React.JSX.Element;
export default NavBar;
