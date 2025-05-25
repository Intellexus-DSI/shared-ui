import React, { useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../styles/NavBar.css";
// @ts-ignore
import IntellexusLogo from "../assets/InetellexusLogo.png";

interface NavBarProps {
    logoutComponent: ReactNode;
}

const NavBar = ({ logoutComponent }: NavBarProps) => {
    const navigate = useNavigate();
    const [dropdownStates, setDropdownStates] = useState({
        texts: false,
        versions: false,
        works: false,
        teams: false,
    });
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
                        <NavDropdown
                            title="Texts"
                            id="texts-dropdown"
                            className="nav-item centered-dropdown"
                            show={dropdownStates.texts}
                            onMouseEnter={() => handleMouseEnter("texts")}
                            onMouseLeave={() => handleMouseLeave("texts")}
                        >
                            <NavDropdown.Item onClick={() => handleNavigate("/texts/indic")}>
                                Indic
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleNavigate("/texts/tibetan")}>
                                Tibetan
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Versions"
                            id="versions-dropdown"
                            className="nav-item centered-dropdown"
                            show={dropdownStates.versions}
                            onMouseEnter={() => handleMouseEnter("versions")}
                            onMouseLeave={() => handleMouseLeave("versions")}
                        >
                            <NavDropdown.Item onClick={() => handleNavigate("/versions/indic")}>
                                Indic
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleNavigate("/versions/tibetan")}>
                                Tibetan
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Works"
                            id="works-dropdown"
                            className="nav-item centered-dropdown"
                            show={dropdownStates.works}
                            onMouseEnter={() => handleMouseEnter("works")}
                            onMouseLeave={() => handleMouseLeave("works")}
                        >
                            <NavDropdown.Item onClick={() => handleNavigate("/works/indic")}>
                                Indic
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleNavigate("/works/tibetan")}>
                                Tibetan
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleNavigate("/works/chinese")}>
                                Chinese
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={() => handleNavigate("/persons")} className="nav-item nav-regular-link">
                            Persons
                        </Nav.Link>
                        <NavDropdown
                            title="Teams"
                            id="teams-dropdown"
                            className="nav-item centered-dropdown"
                            show={dropdownStates.teams}
                            onMouseEnter={() => handleMouseEnter("teams")}
                            onMouseLeave={() => handleMouseLeave("teams")}
                        >
                            <NavDropdown.Item onClick={() => handleNavigate("/teams/chinese")}>
                                Chinese
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleNavigate("/teams/tibetan")}>
                                Tibetan
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={() => handleNavigate("/colophons")} className="nav-item nav-regular-link">
                            Colophons
                        </Nav.Link>
                        <Nav.Link onClick={() => handleNavigate("/places")} className="nav-item nav-regular-link">
                            Places
                        </Nav.Link>
                        <Nav.Link onClick={() => handleNavigate("/codes")} className="nav-item nav-regular-link">
                            Codes
                        </Nav.Link>
                        <Nav.Link onClick={() => handleNavigate("/markdown")} className="nav-item nav-regular-link">
                            Info
                        </Nav.Link>
                        {/* {logoutComponent} */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;