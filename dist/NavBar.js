import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../styles/NavBar.css";
// @ts-ignore
import IntellexusLogo from "./InetellexusLogo.png";
const NavBar = ({ Logout }) => {
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
    return (_jsx(Navbar, { expand: "lg", sticky: "top", className: "navbar", expanded: !isCollapsed, onToggle: () => setIsCollapsed(!isCollapsed), children: _jsxs(Container, { children: [_jsxs("div", { className: "d-flex justify-content-between align-items-center w-100", children: [_jsx(Navbar.Brand, { onClick: () => handleNavigate("/"), style: { cursor: "pointer" }, children: _jsx("div", { className: "nav-logo d-flex align-items-center", children: _jsx("img", { src: IntellexusLogo, alt: "Intellexus Logo", className: "nav-logo-img" }) }) }), _jsx(Navbar.Toggle, { className: "nav-toggle", "aria-controls": "basic-navbar-nav" })] }), _jsx(Navbar.Collapse, { id: "basic-navbar-nav", children: _jsxs(Nav, { className: "ms-auto nav-links", children: [_jsxs(NavDropdown, { title: "Texts", id: "texts-dropdown", className: "nav-item centered-dropdown", show: dropdownStates.texts, onMouseEnter: () => handleMouseEnter("texts"), onMouseLeave: () => handleMouseLeave("texts"), children: [_jsx(NavDropdown.Item, { onClick: () => handleNavigate("/texts/indic"), children: "Indic" }), _jsx(NavDropdown.Item, { onClick: () => handleNavigate("/texts/tibetan"), children: "Tibetan" })] }), _jsxs(NavDropdown, { title: "Versions", id: "versions-dropdown", className: "nav-item centered-dropdown", show: dropdownStates.versions, onMouseEnter: () => handleMouseEnter("versions"), onMouseLeave: () => handleMouseLeave("versions"), children: [_jsx(NavDropdown.Item, { onClick: () => handleNavigate("/versions/indic"), children: "Indic" }), _jsx(NavDropdown.Item, { onClick: () => handleNavigate("/versions/tibetan"), children: "Tibetan" })] }), _jsxs(NavDropdown, { title: "Works", id: "works-dropdown", className: "nav-item centered-dropdown", show: dropdownStates.works, onMouseEnter: () => handleMouseEnter("works"), onMouseLeave: () => handleMouseLeave("works"), children: [_jsx(NavDropdown.Item, { onClick: () => handleNavigate("/works/indic"), children: "Indic" }), _jsx(NavDropdown.Item, { onClick: () => handleNavigate("/works/tibetan"), children: "Tibetan" }), _jsx(NavDropdown.Item, { onClick: () => handleNavigate("/works/chinese"), children: "Chinese" })] }), _jsx(Nav.Link, { onClick: () => handleNavigate("/persons"), className: "nav-item", children: "Persons" }), _jsxs(NavDropdown, { title: "Teams", id: "teams-dropdown", className: "nav-item centered-dropdown", show: dropdownStates.teams, onMouseEnter: () => handleMouseEnter("teams"), onMouseLeave: () => handleMouseLeave("teams"), children: [_jsx(NavDropdown.Item, { onClick: () => handleNavigate("/teams/chinese"), children: "Chinese" }), _jsx(NavDropdown.Item, { onClick: () => handleNavigate("/teams/tibetan"), children: "Tibetan" })] }), _jsx(Nav.Link, { onClick: () => handleNavigate("/colophons"), className: "nav-item", children: "Colophons" }), _jsx(Nav.Link, { onClick: () => handleNavigate("/places"), className: "nav-item", children: "Places" }), _jsx(Nav.Link, { onClick: () => handleNavigate("/codes"), className: "nav-item", children: "Codes" }), _jsx(Nav.Link, { onClick: () => handleNavigate("/markdown"), className: "nav-item", children: "Info" }), Logout] }) })] }) }));
};
export default NavBar;
