import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import "../styles/MainLayout.css";

interface NavItem {
    title: string;
    type: 'dropdown' | 'link';
    items?: { title: string; path: string }[];
    path?: string;
}
const navItems: NavItem[] = [
    { title: "Search", type: "link", path: "/" },
    { title: "Database", type: "link", path: "/compare" },
    { title: "Multi-Choose Demo", type: "link", path: "/multi-choose" },
];

const MainLayout: React.FC = () => {
    const navigate = useNavigate();

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

    return (
        <div className="main-layout">
            {/* Navigation Bar */}
            <NavBar items={navItems} logoutComponent={<div>logout</div>} navigate={navigate} />

            {/* Main Content Area */}
            <main className="main-content">
                {/* Renders the child routes */}
                <Outlet />
            </main>
            <Footer footerLinks={footerLinks} />
        </div>
    );
};

export default MainLayout;