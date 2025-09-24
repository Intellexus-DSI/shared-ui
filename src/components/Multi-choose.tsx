import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import CheckIcon from "@mui/icons-material/Check";

interface Option {
    label: string;
    code: string;
}

interface MultiSelectCollectionsProps {
    options: Option[];
    label?: string;
}

export default function MultiSelectCollections({
    options,
    label = "Exclude collections",
}: MultiSelectCollectionsProps) {
    const [selected, setSelected] = useState<Option[]>([]);

    return (
        <Autocomplete
            multiple
            options={options}
            value={selected}
            onChange={(_, newValue) => setSelected(newValue)}
            renderOption={(props, option, { selected: isSelected }) => (
                <li {...props}>
                    {option.label} ({option.code})
                    {isSelected ? <CheckIcon style={{ marginLeft: 8 }} /> : null}
                </li>
            )}
            getOptionLabel={(option) => `${option.label} (${option.code})`}
            renderTags={(value: Option[], getTagProps) =>
                value.map((option: Option, index: number) => (
                    <Chip
                        label={`${option.label} (${option.code})`}
                        {...getTagProps({ index })}
                    />
                ))
            }
            renderInput={(params) => (
                <TextField {...params} variant="outlined" label={label} />
            )}
        />
    );
}
