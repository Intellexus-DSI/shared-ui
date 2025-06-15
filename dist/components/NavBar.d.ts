import { ReactNode } from "react";
import "../styles/NavBar.css";
interface NavItem {
    title: string;
    type: 'dropdown' | 'link';
    items?: {
        title: string;
        path: string;
    }[];
    path?: string;
}
interface NavBarProps {
    logoutComponent: ReactNode;
    items: NavItem[];
}
export declare const NavBar: ({ logoutComponent, items }: NavBarProps) => import("react/jsx-runtime").JSX.Element;
export {};
