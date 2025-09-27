import { j as jsxRuntimeExports } from '../../_virtual/jsx-runtime.js';
import { useState } from 'react';
import CheckIcon from '../../node_modules/@mui/icons-material/esm/Check.js';
import Autocomplete from '../../node_modules/@mui/material/esm/Autocomplete/Autocomplete.js';
import TextField from '../../node_modules/@mui/material/esm/TextField/TextField.js';
import Chip from '../../node_modules/@mui/material/esm/Chip/Chip.js';

const MultiSelectCollections = ({ options, label = "Exclude collections", }) => {
    const [selected, setSelected] = useState([]);
    return (jsxRuntimeExports.jsx(Autocomplete, { multiple: true, options: options, value: selected, onChange: (_, newValue) => setSelected(newValue), renderOption: (props, option, { selected: isSelected }) => (jsxRuntimeExports.jsxs("li", Object.assign({}, props, { children: [option.label, " (", option.code, ")", isSelected ? jsxRuntimeExports.jsx(CheckIcon, { style: { marginLeft: 8 } }) : null] }))), getOptionLabel: (option) => `${option.label} (${option.code})`, renderTags: (value, getTagProps) => value.map((option, index) => (jsxRuntimeExports.jsx(Chip, Object.assign({ label: `${option.label} (${option.code})` }, getTagProps({ index }))))), renderInput: (params) => (jsxRuntimeExports.jsx(TextField, Object.assign({}, params, { variant: "outlined", label: label }))) }));
};

export { MultiSelectCollections, MultiSelectCollections as default };
//# sourceMappingURL=Multi-choose.js.map
