import { j as jsxRuntimeExports } from '../../_virtual/jsx-runtime.js';
import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import IntellexusLogo from '../assets/InetellexusLogo.png.js';

const NavBar = ({ logoutComponent, items, navigate }) => {
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
    return (jsxRuntimeExports.jsx(Navbar, { expand: "lg", sticky: "top", className: "navbar", expanded: !isCollapsed, onToggle: () => setIsCollapsed(!isCollapsed), children: jsxRuntimeExports.jsxs(Container, { children: [jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-between align-items-center w-100", children: [jsxRuntimeExports.jsx(Navbar.Brand, { onClick: () => handleNavigate("/"), style: { cursor: "pointer" }, children: jsxRuntimeExports.jsx("div", { className: "nav-logo d-flex align-items-center", children: jsxRuntimeExports.jsx("img", { src: IntellexusLogo, alt: "Intellexus Logo", className: "nav-logo-img" }) }) }), jsxRuntimeExports.jsx(Navbar.Toggle, { className: "nav-toggle", "aria-controls": "basic-navbar-nav" })] }), jsxRuntimeExports.jsx(Navbar.Collapse, { id: "basic-navbar-nav", children: jsxRuntimeExports.jsx(Nav, { className: "ms-auto nav-links", children: items.map((item, index) => {
                            if (item.type === 'dropdown' && item.items) {
                                return (jsxRuntimeExports.jsx(NavDropdown, { title: item.title, id: `${item.title.toLowerCase()}-dropdown`, className: "nav-item centered-dropdown", show: dropdownStates[item.title] || false, onMouseEnter: () => handleMouseEnter(item.title), onMouseLeave: () => handleMouseLeave(item.title), children: item.items.map((subItem, subIndex) => (jsxRuntimeExports.jsx(NavDropdown.Item, { onClick: () => handleNavigate(subItem.path), children: subItem.title }, subIndex))) }, index));
                            }
                            else if (item.type === 'link' && item.path) {
                                return (jsxRuntimeExports.jsx(Nav.Link, { onClick: () => handleNavigate(item.path), className: "nav-item nav-regular-link", children: item.title }, index));
                            }
                            return null;
                        }) }) })] }) }));
};

export { NavBar };
//# sourceMappingURL=NavBar.js.map
