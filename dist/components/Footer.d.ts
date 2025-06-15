import "../styles/Footer.css";
interface FooterLink {
    label: string;
    href: string;
}
interface FooterProps {
    footerLinks: FooterLink[];
}
export declare const Footer: ({ footerLinks }: FooterProps) => import("react/jsx-runtime").JSX.Element;
export {};
