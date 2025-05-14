import { j as jsxRuntimeExports } from '../_virtual/jsx-runtime.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import IntellexusLogo from './InetellexusLogo.png.js';

const NavBar = () => {
    const navigate = useNavigate();
    const [dropdownStates, setDropdownStates] = useState({
        texts: false,
        versions: false,
        works: false,
        teams: false,
    });
    const [isCollapsed, setIsCollapsed] = useState(true); // State to manage collapse
    const handleMouseEnter = (key) => {
        setDropdownStates((prevState) => (Object.assign(Object.assign({}, prevState), { [key]: true })));
    };
    const handleMouseLeave = (key) => {
        setDropdownStates((prevState) => (Object.assign(Object.assign({}, prevState), { [key]: false })));
    };
    const handleNavigate = (path) => {
        navigate(path);
        setIsCollapsed(true); // Close the collapse when an option is selected
    };
    return (jsxRuntimeExports.jsx(Navbar, { expand: "lg", sticky: "top", className: "navbar", expanded: !isCollapsed, onToggle: () => setIsCollapsed(!isCollapsed), children: jsxRuntimeExports.jsxs(Container, { children: [jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-between align-items-center w-100", children: [jsxRuntimeExports.jsx(Navbar.Brand, { onClick: () => handleNavigate("/"), style: { cursor: "pointer" }, children: jsxRuntimeExports.jsx("div", { className: "nav-logo d-flex align-items-center", children: jsxRuntimeExports.jsx("img", { src: IntellexusLogo, alt: "Intellexus Logo", className: "nav-logo-img" }) }) }), jsxRuntimeExports.jsx(Navbar.Toggle, { className: "nav-toggle", "aria-controls": "basic-navbar-nav" })] }), jsxRuntimeExports.jsx(Navbar.Collapse, { id: "basic-navbar-nav", children: jsxRuntimeExports.jsxs(Nav, { className: "ms-auto nav-links", children: [jsxRuntimeExports.jsxs(NavDropdown, { title: "Texts", id: "texts-dropdown", className: "nav-item centered-dropdown", show: dropdownStates.texts, onMouseEnter: () => handleMouseEnter("texts"), onMouseLeave: () => handleMouseLeave("texts"), children: [jsxRuntimeExports.jsx(NavDropdown.Item, { onClick: () => handleNavigate("/texts/indic"), children: "Indic" }), jsxRuntimeExports.jsx(NavDropdown.Item, { onClick: () => handleNavigate("/texts/tibetan"), children: "Tibetan" })] }), jsxRuntimeExports.jsxs(NavDropdown, { title: "Versions", id: "versions-dropdown", className: "nav-item centered-dropdown", show: dropdownStates.versions, onMouseEnter: () => handleMouseEnter("versions"), onMouseLeave: () => handleMouseLeave("versions"), children: [jsxRuntimeExports.jsx(NavDropdown.Item, { onClick: () => handleNavigate("/versions/indic"), children: "Indic" }), jsxRuntimeExports.jsx(NavDropdown.Item, { onClick: () => handleNavigate("/versions/tibetan"), children: "Tibetan" })] }), jsxRuntimeExports.jsxs(NavDropdown, { title: "Works", id: "works-dropdown", className: "nav-item centered-dropdown", show: dropdownStates.works, onMouseEnter: () => handleMouseEnter("works"), onMouseLeave: () => handleMouseLeave("works"), children: [jsxRuntimeExports.jsx(NavDropdown.Item, { onClick: () => handleNavigate("/works/indic"), children: "Indic" }), jsxRuntimeExports.jsx(NavDropdown.Item, { onClick: () => handleNavigate("/works/tibetan"), children: "Tibetan" }), jsxRuntimeExports.jsx(NavDropdown.Item, { onClick: () => handleNavigate("/works/chinese"), children: "Chinese" })] }), jsxRuntimeExports.jsx(Nav.Link, { onClick: () => handleNavigate("/persons"), className: "nav-item", children: "Persons" }), jsxRuntimeExports.jsxs(NavDropdown, { title: "Teams", id: "teams-dropdown", className: "nav-item centered-dropdown", show: dropdownStates.teams, onMouseEnter: () => handleMouseEnter("teams"), onMouseLeave: () => handleMouseLeave("teams"), children: [jsxRuntimeExports.jsx(NavDropdown.Item, { onClick: () => handleNavigate("/teams/chinese"), children: "Chinese" }), jsxRuntimeExports.jsx(NavDropdown.Item, { onClick: () => handleNavigate("/teams/tibetan"), children: "Tibetan" })] }), jsxRuntimeExports.jsx(Nav.Link, { onClick: () => handleNavigate("/colophons"), className: "nav-item", children: "Colophons" }), jsxRuntimeExports.jsx(Nav.Link, { onClick: () => handleNavigate("/places"), className: "nav-item", children: "Places" }), jsxRuntimeExports.jsx(Nav.Link, { onClick: () => handleNavigate("/codes"), className: "nav-item", children: "Codes" }), jsxRuntimeExports.jsx(Nav.Link, { onClick: () => handleNavigate("/markdown"), className: "nav-item", children: "Info" })] }) })] }) }));
};

export { NavBar as default };
