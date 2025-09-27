import { j as jsxRuntimeExports } from '../../_virtual/jsx-runtime.js';
import { useState, useMemo } from 'react';
import SearchIcon from '../../node_modules/@mui/icons-material/esm/Search.js';
import CloseIcon from '../../node_modules/@mui/icons-material/esm/Close.js';
import Box from '../../node_modules/@mui/material/esm/Box/Box.js';
import IconButton from '../../node_modules/@mui/material/esm/IconButton/IconButton.js';
import TextField from '../../node_modules/@mui/material/esm/TextField/TextField.js';
import InputAdornment from '../../node_modules/@mui/material/esm/InputAdornment/InputAdornment.js';
import Typography from '../../node_modules/@mui/material/esm/Typography/Typography.js';

const GenericSearch = ({ content, label = "Search in Inquiry Text" }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const filteredContent = useMemo(() => {
        if (!searchTerm) {
            return content;
        }
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return content.filter(item => item.text.toLowerCase().includes(lowerCaseSearchTerm) ||
            item.id.toLowerCase().includes(lowerCaseSearchTerm));
    }, [content, searchTerm]);
    const handleToggleSearch = () => {
        setIsExpanded(!isExpanded);
        if (isExpanded) {
            setSearchTerm('');
        }
    };
    return (jsxRuntimeExports.jsxs(Box, { sx: { p: 2 }, children: [!isExpanded ? (jsxRuntimeExports.jsx(IconButton, { onClick: handleToggleSearch, color: "primary", "aria-label": "open search", children: jsxRuntimeExports.jsx(SearchIcon, {}) })) : (jsxRuntimeExports.jsx(TextField, { label: label, variant: "outlined", fullWidth: true, value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), sx: { mb: 2 }, InputProps: {
                    startAdornment: (jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: jsxRuntimeExports.jsx(SearchIcon, {}) })),
                    endAdornment: (jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: jsxRuntimeExports.jsx(IconButton, { onClick: handleToggleSearch, edge: "end", "aria-label": "close search", children: jsxRuntimeExports.jsx(CloseIcon, {}) }) })),
                } })), isExpanded && (jsxRuntimeExports.jsx(Box, { children: filteredContent.length > 0 ? (filteredContent.map((item) => (jsxRuntimeExports.jsx(Typography, { id: item.id, variant: "body1", paragraph: true, children: item.text }, item.id)))) : (jsxRuntimeExports.jsx(Typography, { variant: "body1", color: "textSecondary", children: "No matching content found." })) }))] }));
};

export { GenericSearch, GenericSearch as default };
//# sourceMappingURL=GenericSearch.js.map
