"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_bootstrap_1 = require("react-bootstrap");
require("../styles/NavBar.css");
// @ts-ignore
const InetellexusLogo_png_1 = __importDefault(require("../assets/InetellexusLogo.png"));
const NavBar = ({ logoutComponent, items }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [dropdownStates, setDropdownStates] = (0, react_1.useState)({});
    const [isCollapsed, setIsCollapsed] = (0, react_1.useState)(true);
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
    return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Navbar, { expand: "lg", sticky: "top", className: "navbar", expanded: !isCollapsed, onToggle: () => setIsCollapsed(!isCollapsed), children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Container, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "d-flex justify-content-between align-items-center w-100", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Navbar.Brand, { onClick: () => handleNavigate("/"), style: { cursor: "pointer" }, children: (0, jsx_runtime_1.jsx)("div", { className: "nav-logo d-flex align-items-center", children: (0, jsx_runtime_1.jsx)("img", { src: InetellexusLogo_png_1.default, alt: "Intellexus Logo", className: "nav-logo-img" }) }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Navbar.Toggle, { className: "nav-toggle", "aria-controls": "basic-navbar-nav" })] }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Navbar.Collapse, { id: "basic-navbar-nav", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav, { className: "ms-auto nav-links", children: items.map((item, index) => {
                            if (item.type === 'dropdown' && item.items) {
                                return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.NavDropdown, { title: item.title, id: `${item.title.toLowerCase()}-dropdown`, className: "nav-item centered-dropdown", show: dropdownStates[item.title] || false, onMouseEnter: () => handleMouseEnter(item.title), onMouseLeave: () => handleMouseLeave(item.title), children: item.items.map((subItem, subIndex) => ((0, jsx_runtime_1.jsx)(react_bootstrap_1.NavDropdown.Item, { onClick: () => handleNavigate(subItem.path), children: subItem.title }, subIndex))) }, index));
                            }
                            else if (item.type === 'link' && item.path) {
                                return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { onClick: () => handleNavigate(item.path), className: "nav-item nav-regular-link", children: item.title }, index));
                            }
                            return null;
                        }) }) })] }) }));
};
exports.NavBar = NavBar;
