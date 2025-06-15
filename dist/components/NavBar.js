import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../styles/NavBar.css";
// @ts-ignore
import IntellexusLogo from "../assets/InetellexusLogo.png";
const NavBar = ({ logoutComponent, items }) => {
    const navigate = useNavigate();
    const [dropdownStates, setDropdownStates] = useState({});
    const [isCollapsed, setIsCollapsed] = useState(true);
    const handleMouseEnter = (key) => {
        setDropdownStates((prevState) => (Object.assign(Object.assign({}, prevState), { [key]: true })));
    };
    const handleMouseLeave = (key) => {
        setDropdownStates((prevState) => (Object.assign(Object.assign({}, prevState), { [key]: false })));
    };
    const handleNavigate = (path) => {
        navigate(path);
        setIsCollapsed(true);
    };
    return (_jsx(Navbar, { expand: "lg", sticky: "top", className: "navbar", expanded: !isCollapsed, onToggle: () => setIsCollapsed(!isCollapsed), children: _jsxs(Container, { children: [_jsxs("div", { className: "d-flex justify-content-between align-items-center w-100", children: [_jsx(Navbar.Brand, { onClick: () => handleNavigate("/"), style: { cursor: "pointer" }, children: _jsx("div", { className: "nav-logo d-flex align-items-center", children: _jsx("img", { src: IntellexusLogo, alt: "Intellexus Logo", className: "nav-logo-img" }) }) }), _jsx(Navbar.Toggle, { className: "nav-toggle", "aria-controls": "basic-navbar-nav" })] }), _jsx(Navbar.Collapse, { id: "basic-navbar-nav", children: _jsx(Nav, { className: "ms-auto nav-links", children: items.map((item, index) => {
                            if (item.type === 'dropdown' && item.items) {
                                return (_jsx(NavDropdown, { title: item.title, id: `${item.title.toLowerCase()}-dropdown`, className: "nav-item centered-dropdown", show: dropdownStates[item.title] || false, onMouseEnter: () => handleMouseEnter(item.title), onMouseLeave: () => handleMouseLeave(item.title), children: item.items.map((subItem, subIndex) => (_jsx(NavDropdown.Item, { onClick: () => handleNavigate(subItem.path), children: subItem.title }, subIndex))) }, index));
                            }
                            else if (item.type === 'link' && item.path) {
                                return (_jsx(Nav.Link, { onClick: () => handleNavigate(item.path), className: "nav-item nav-regular-link", children: item.title }, index));
                            }
                            return null;
                        }) }) })] }) }));
};
export default NavBar;
