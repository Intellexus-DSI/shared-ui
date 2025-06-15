import React, { useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../styles/NavBar.css";
// @ts-ignore
import IntellexusLogo from "../assets/InetellexusLogo.png";

interface NavItem {
    title: string;
    type: 'dropdown' | 'link';
    items?: { title: string; path: string }[];
    path?: string;
}

interface NavBarProps {
    logoutComponent: ReactNode;
    items: NavItem[];
}

export const NavBar = ({ logoutComponent, items }: NavBarProps) => {
    const navigate = useNavigate();
    const [dropdownStates, setDropdownStates] = useState<Record<string, boolean>>({});
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleMouseEnter = (key: string) => {
        setDropdownStates((prevState) => ({ ...prevState, [key]: true }));
    };

    const handleMouseLeave = (key: string) => {
        setDropdownStates((prevState) => ({ ...prevState, [key]: false }));
    };

    const handleNavigate = (path: string) => {
        navigate(path);
        setIsCollapsed(true);
    };

    return (
        <Navbar
            expand="lg"
            sticky="top"
            className="navbar"
            expanded={!isCollapsed}
            onToggle={() => setIsCollapsed(!isCollapsed)}
        >
            <Container>
                <div className="d-flex justify-content-between align-items-center w-100">
                    <Navbar.Brand
                        onClick={() => handleNavigate("/")}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="nav-logo d-flex align-items-center">
                            <img
                                src={IntellexusLogo}
                                alt="Intellexus Logo"
                                className="nav-logo-img"
                            />
                        </div>
                    </Navbar.Brand>

                    <Navbar.Toggle
                        className="nav-toggle"
                        aria-controls="basic-navbar-nav"
                    />
                </div>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-links">
                        {items.map((item, index) => {
                            if (item.type === 'dropdown' && item.items) {
                                return (
                                    <NavDropdown
                                        key={index}
                                        title={item.title}
                                        id={`${item.title.toLowerCase()}-dropdown`}
                                        className="nav-item centered-dropdown"
                                        show={dropdownStates[item.title] || false}
                                        onMouseEnter={() => handleMouseEnter(item.title)}
                                        onMouseLeave={() => handleMouseLeave(item.title)}
                                    >
                                        {item.items.map((subItem, subIndex) => (
                                            <NavDropdown.Item key={subIndex} onClick={() => handleNavigate(subItem.path)}>
                                                {subItem.title}
                                            </NavDropdown.Item>
                                        ))}
                                    </NavDropdown>
                                );
                            } else if (item.type === 'link' && item.path) {
                                return (
                                    <Nav.Link key={index} onClick={() => handleNavigate(item.path!)} className="nav-item nav-regular-link">
                                        {item.title}
                                    </Nav.Link>
                                );
                            }
                            return null;
                        })}
                        {/* {logoutComponent} */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};