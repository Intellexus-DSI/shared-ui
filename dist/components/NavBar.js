"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
require("../styles/NavBar.css");
// @ts-ignore
var InetellexusLogo_png_1 = __importDefault(require("../assets/InetellexusLogo.png"));
var NavBar = function (_a) {
    var logoutComponent = _a.logoutComponent;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _b = (0, react_1.useState)({
        texts: false,
        versions: false,
        works: false,
        teams: false,
    }), dropdownStates = _b[0], setDropdownStates = _b[1];
    var _c = (0, react_1.useState)(true), isCollapsed = _c[0], setIsCollapsed = _c[1];
    var handleMouseEnter = function (key) {
        setDropdownStates(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[key] = true, _a)));
        });
    };
    var handleMouseLeave = function (key) {
        setDropdownStates(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[key] = false, _a)));
        });
    };
    var handleNavigate = function (path) {
        navigate(path);
        setIsCollapsed(true);
    };
    return (react_1.default.createElement(react_bootstrap_1.Navbar, { expand: "lg", sticky: "top", className: "navbar", expanded: !isCollapsed, onToggle: function () { return setIsCollapsed(!isCollapsed); } },
        react_1.default.createElement(react_bootstrap_1.Container, null,
            react_1.default.createElement("div", { className: "d-flex justify-content-between align-items-center w-100" },
                react_1.default.createElement(react_bootstrap_1.Navbar.Brand, { onClick: function () { return handleNavigate("/"); }, style: { cursor: "pointer" } },
                    react_1.default.createElement("div", { className: "nav-logo d-flex align-items-center" },
                        react_1.default.createElement("img", { src: InetellexusLogo_png_1.default, alt: "Intellexus Logo", className: "nav-logo-img" }))),
                react_1.default.createElement(react_bootstrap_1.Navbar.Toggle, { className: "nav-toggle", "aria-controls": "basic-navbar-nav" })),
            react_1.default.createElement(react_bootstrap_1.Navbar.Collapse, { id: "basic-navbar-nav" },
                react_1.default.createElement(react_bootstrap_1.Nav, { className: "ms-auto nav-links" },
                    react_1.default.createElement(react_bootstrap_1.NavDropdown, { title: "Texts", id: "texts-dropdown", className: "nav-item centered-dropdown", show: dropdownStates.texts, onMouseEnter: function () { return handleMouseEnter("texts"); }, onMouseLeave: function () { return handleMouseLeave("texts"); } },
                        react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { onClick: function () { return handleNavigate("/texts/indic"); } }, "Indic"),
                        react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { onClick: function () { return handleNavigate("/texts/tibetan"); } }, "Tibetan")),
                    react_1.default.createElement(react_bootstrap_1.NavDropdown, { title: "Versions", id: "versions-dropdown", className: "nav-item centered-dropdown", show: dropdownStates.versions, onMouseEnter: function () { return handleMouseEnter("versions"); }, onMouseLeave: function () { return handleMouseLeave("versions"); } },
                        react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { onClick: function () { return handleNavigate("/versions/indic"); } }, "Indic"),
                        react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { onClick: function () { return handleNavigate("/versions/tibetan"); } }, "Tibetan")),
                    react_1.default.createElement(react_bootstrap_1.NavDropdown, { title: "Works", id: "works-dropdown", className: "nav-item centered-dropdown", show: dropdownStates.works, onMouseEnter: function () { return handleMouseEnter("works"); }, onMouseLeave: function () { return handleMouseLeave("works"); } },
                        react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { onClick: function () { return handleNavigate("/works/indic"); } }, "Indic"),
                        react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { onClick: function () { return handleNavigate("/works/tibetan"); } }, "Tibetan"),
                        react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { onClick: function () { return handleNavigate("/works/chinese"); } }, "Chinese")),
                    react_1.default.createElement(react_bootstrap_1.Nav.Link, { onClick: function () { return handleNavigate("/persons"); }, className: "nav-item" }, "Persons"),
                    react_1.default.createElement(react_bootstrap_1.NavDropdown, { title: "Teams", id: "teams-dropdown", className: "nav-item centered-dropdown", show: dropdownStates.teams, onMouseEnter: function () { return handleMouseEnter("teams"); }, onMouseLeave: function () { return handleMouseLeave("teams"); } },
                        react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { onClick: function () { return handleNavigate("/teams/chinese"); } }, "Chinese"),
                        react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { onClick: function () { return handleNavigate("/teams/tibetan"); } }, "Tibetan")),
                    react_1.default.createElement(react_bootstrap_1.Nav.Link, { onClick: function () { return handleNavigate("/colophons"); }, className: "nav-item" }, "Colophons"),
                    react_1.default.createElement(react_bootstrap_1.Nav.Link, { onClick: function () { return handleNavigate("/places"); }, className: "nav-item" }, "Places"),
                    react_1.default.createElement(react_bootstrap_1.Nav.Link, { onClick: function () { return handleNavigate("/codes"); }, className: "nav-item" }, "Codes"),
                    react_1.default.createElement(react_bootstrap_1.Nav.Link, { onClick: function () { return handleNavigate("/markdown"); }, className: "nav-item" }, "Info"),
                    logoutComponent)))));
};
exports.default = NavBar;
