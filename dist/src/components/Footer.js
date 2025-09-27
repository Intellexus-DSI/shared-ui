import { j as jsxRuntimeExports } from '../../_virtual/jsx-runtime.js';
import { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import MoreVertIcon from '../../node_modules/@mui/icons-material/esm/MoreVert.js';
import IntellexusLogo from '../assets/InetellexusLogo.png.js';
import logo_erc from '../assets/logo_erc.png.js';
import logo_reichman_university from '../assets/logo_reichman_university.png.js';
import logo_uni_hamburg from '../assets/logo_uni_hamburg.png.js';
import IconButton from '../../node_modules/@mui/material/esm/IconButton/IconButton.js';
import Menu from '../../node_modules/@mui/material/esm/Menu/Menu.js';
import MenuItem from '../../node_modules/@mui/material/esm/MenuItem/MenuItem.js';

const ITEM_HEIGHT = 48;
const Footer = ({ footerLinks }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (jsxRuntimeExports.jsxs("footer", { className: "footer", children: [jsxRuntimeExports.jsxs("div", { className: "footer-top", children: [jsxRuntimeExports.jsx("div", {}), jsxRuntimeExports.jsx("img", { src: logo_uni_hamburg, alt: "Hamburg Logo", className: "footer-hamburg-img" }), jsxRuntimeExports.jsx("img", { src: logo_reichman_university, alt: "Reichman Logo", className: "footer-reichman-img" }), jsxRuntimeExports.jsx("img", { src: logo_erc, alt: "ERC Logo", className: "footer-erc-img" }), jsxRuntimeExports.jsx("div", {})] }), jsxRuntimeExports.jsxs(Navbar, { expand: "lg", className: "footer-bottom", children: [jsxRuntimeExports.jsx("div", { className: "footer-logo-container", children: jsxRuntimeExports.jsx(Navbar.Brand, { href: "/", className: "footer-logo", children: jsxRuntimeExports.jsx("img", { src: IntellexusLogo, alt: "Intellexus Logo", className: "footer-logo-img" }) }) }), jsxRuntimeExports.jsxs("div", { className: "d-lg-none", children: [jsxRuntimeExports.jsx(IconButton, { "aria-label": "more", id: "footer-menu-button", "aria-controls": open ? "footer-menu" : undefined, "aria-expanded": open ? "true" : undefined, "aria-haspopup": "true", onClick: handleClick, sx: { color: "white" }, children: jsxRuntimeExports.jsx(MoreVertIcon, {}) }), jsxRuntimeExports.jsx(Menu, { id: "footer-menu", MenuListProps: {
                                    "aria-labelledby": "footer-menu-button",
                                }, anchorEl: anchorEl, open: open, onClose: handleClose, slotProps: {
                                    paper: {
                                        style: {
                                            maxHeight: ITEM_HEIGHT * 4.5,
                                            width: "20ch",
                                        },
                                    },
                                }, children: footerLinks.map((link) => (jsxRuntimeExports.jsx(MenuItem, { component: "a", href: link.href, onClick: handleClose, className: "footer-link", children: link.label }, link.label))) })] }), jsxRuntimeExports.jsx("div", { className: "footer-text d-none d-lg-flex", children: footerLinks.map((link) => (jsxRuntimeExports.jsx("a", { href: link.href, className: "footer-link", children: link.label }, link.label))) })] })] }));
};

export { Footer };
//# sourceMappingURL=Footer.js.map
