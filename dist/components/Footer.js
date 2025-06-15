"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const Menu_1 = __importDefault(require("@mui/material/Menu"));
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const MoreVert_1 = __importDefault(require("@mui/icons-material/MoreVert"));
// @ts-ignore
const InetellexusLogo_png_1 = __importDefault(require("../assets/InetellexusLogo.png"));
// @ts-ignore
const logo_erc_png_1 = __importDefault(require("../assets/logo_erc.png"));
// @ts-ignore
const logo_reichman_university_png_1 = __importDefault(require("../assets/logo_reichman_university.png"));
// @ts-ignore
const logo_uni_hamburg_png_1 = __importDefault(require("../assets/logo_uni_hamburg.png"));
require("../styles/Footer.css");
const ITEM_HEIGHT = 48;
const Footer = ({ footerLinks }) => {
    const [anchorEl, setAnchorEl] = (0, react_1.useState)(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return ((0, jsx_runtime_1.jsxs)("footer", { className: "footer", children: [(0, jsx_runtime_1.jsxs)("div", { className: "footer-top", children: [(0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("img", { src: logo_uni_hamburg_png_1.default, alt: "Hamburg Logo", className: "footer-hamburg-img" }), (0, jsx_runtime_1.jsx)("img", { src: logo_reichman_university_png_1.default, alt: "Reichman Logo", className: "footer-reichman-img" }), (0, jsx_runtime_1.jsx)("img", { src: logo_erc_png_1.default, alt: "ERC Logo", className: "footer-erc-img" }), (0, jsx_runtime_1.jsx)("div", {})] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Navbar, { expand: "lg", className: "footer-bottom", children: [(0, jsx_runtime_1.jsx)("div", { className: "footer-logo-container", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Navbar.Brand, { href: "/", className: "footer-logo", children: (0, jsx_runtime_1.jsx)("img", { src: InetellexusLogo_png_1.default, alt: "Intellexus Logo", className: "footer-logo-img" }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "d-lg-none", children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, { "aria-label": "more", id: "footer-menu-button", "aria-controls": open ? "footer-menu" : undefined, "aria-expanded": open ? "true" : undefined, "aria-haspopup": "true", onClick: handleClick, sx: { color: "white" }, children: (0, jsx_runtime_1.jsx)(MoreVert_1.default, {}) }), (0, jsx_runtime_1.jsx)(Menu_1.default, { id: "footer-menu", MenuListProps: {
                                    "aria-labelledby": "footer-menu-button",
                                }, anchorEl: anchorEl, open: open, onClose: handleClose, slotProps: {
                                    paper: {
                                        style: {
                                            maxHeight: ITEM_HEIGHT * 4.5,
                                            width: "20ch",
                                        },
                                    },
                                }, children: footerLinks.map((link) => ((0, jsx_runtime_1.jsx)(MenuItem_1.default, { component: "a", href: link.href, onClick: handleClose, className: "footer-link", children: link.label }, link.label))) })] }), (0, jsx_runtime_1.jsx)("div", { className: "footer-text d-none d-lg-flex", children: footerLinks.map((link) => ((0, jsx_runtime_1.jsx)("a", { href: link.href, className: "footer-link", children: link.label }, link.label))) })] })] }));
};
exports.Footer = Footer;
