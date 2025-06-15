import React, { useState } from "react";
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

interface FooterLink {
    label: string;
    href: string;
}

interface FooterProps {
    footerLinks: FooterLink[];
}

export const Footer = ({ footerLinks }: FooterProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <footer className="footer">
            <div className="footer-top">
                <div></div>
                <img src={logo_uni_hamburg} alt="Hamburg Logo" className="footer-hamburg-img" />
                <img src={logo_reichman_university} alt="Reichman Logo" className="footer-reichman-img" />
                <img src={logo_erc} alt="ERC Logo" className="footer-erc-img" />
                <div></div>
            </div>
            <Navbar expand="lg" className="footer-bottom">
                <div className="footer-logo-container">
                    <Navbar.Brand href="/" className="footer-logo">
                        <img src={IntellexusLogo} alt="Intellexus Logo" className="footer-logo-img" />
                    </Navbar.Brand>
                </div>

                {/* Collapsible Menu for Small Screens */}
                <div className="d-lg-none">
                    <IconButton
                        aria-label="more"
                        id="footer-menu-button"
                        aria-controls={open ? "footer-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        sx={{ color: "white" }}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="footer-menu"
                        MenuListProps={{
                            "aria-labelledby": "footer-menu-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                            paper: {
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: "20ch",
                                },
                            },
                        }}
                    >
                        {footerLinks.map((link) => (
                            <MenuItem
                                key={link.label}
                                component="a"
                                href={link.href}
                                onClick={handleClose}
                                className="footer-link"
                            >
                                {link.label}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>

                {/* Footer Links for Larger Screens */}
                <div className="footer-text d-none d-lg-flex">
                    {footerLinks.map((link) => (
                        <a key={link.label} href={link.href} className="footer-link">
                            {link.label}
                        </a>
                    ))}
                </div>
            </Navbar>
        </footer>
    );
};