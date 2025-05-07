import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button onClick={onClick} style={{ padding: '10px', border: '1px solid #ccc' }}>
            {children}
        </button>
    );
};