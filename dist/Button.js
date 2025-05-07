import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ children, onClick }) => {
    return (_jsx("button", { onClick: onClick, style: { padding: '10px', border: '1px solid #ccc' }, children: children }));
};
