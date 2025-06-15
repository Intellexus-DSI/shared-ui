import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Navbar } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// @ts-ignore
import IntellexusLogo from "../assets/InetellexusLogo.png";
// @ts-ignore
import logo_erc from "../assets/logo_erc.png";
// @ts-ignore
import logo_reichman_university from "../assets/logo_reichman_university.png";
// @ts-ignore
import logo_uni_hamburg from "../assets/logo_uni_hamburg.png";
import "../styles/Footer.css";
const ITEM_HEIGHT = 48;
const Footer = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const footerLinks = [
        { label: "Home", href: "/" },
        { label: "Project", href: "/" },
        { label: "Team", href: "/" },
        { label: "Events", href: "/" },
        { label: "Activities", href: "/" },
        { label: "News", href: "/" },
        { label: "Publications", href: "/" },
        { label: "Platform", href: "/" },
        { label: "Collaborations", href: "/" },
    ];
    return (_jsxs("footer", { className: "footer", children: [_jsxs("div", { className: "footer-top", children: [_jsx("div", {}), _jsx("img", { src: logo_uni_hamburg, alt: "Hamburg Logo", className: "footer-hamburg-img" }), _jsx("img", { src: logo_reichman_university, alt: "Reichman Logo", className: "footer-reichman-img" }), _jsx("img", { src: logo_erc, alt: "ERC Logo", className: "footer-erc-img" }), _jsx("div", {})] }), _jsxs(Navbar, { expand: "lg", className: "footer-bottom", children: [_jsx("div", { className: "footer-logo-container", children: _jsx(Navbar.Brand, { href: "/", className: "footer-logo", children: _jsx("img", { src: IntellexusLogo, alt: "Intellexus Logo", className: "footer-logo-img" }) }) }), _jsxs("div", { className: "d-lg-none", children: [_jsx(IconButton, { "aria-label": "more", id: "footer-menu-button", "aria-controls": open ? "footer-menu" : undefined, "aria-expanded": open ? "true" : undefined, "aria-haspopup": "true", onClick: handleClick, sx: { color: "white" }, children: _jsx(MoreVertIcon, {}) }), _jsx(Menu, { id: "footer-menu", MenuListProps: {
                                    "aria-labelledby": "footer-menu-button",
                                }, anchorEl: anchorEl, open: open, onClose: handleClose, slotProps: {
                                    paper: {
                                        style: {
                                            maxHeight: ITEM_HEIGHT * 4.5,
                                            width: "20ch",
                                        },
                                    },
                                }, children: footerLinks.map((link) => (_jsx(MenuItem, { component: "a" // Render MenuItem as an <a> tag
                                    , href: link.href, onClick: handleClose, className: "footer-link", children: link.label }, link.label))) })] }), _jsx("div", { className: "footer-text d-none d-lg-flex", children: footerLinks.map((link) => (_jsx("a", { href: link.href, className: "footer-link", children: link.label }, link.label))) })] })] }));
};
export default Footer;
