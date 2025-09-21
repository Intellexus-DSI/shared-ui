import React from "react";
import MultiSelectCollections from "../components/Multi-choose";

const options = [
    { label: "Option A", code: "A" },
    { label: "Option B", code: "B" },
    { label: "Option C", code: "C" },
    { label: "Option D", code: "D" },
];

const MultiChoosePage: React.FC = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Multi-Choose Component Demo</h1>
            <MultiSelectCollections options={options} label="Select your options" />
        </div>
    );
};

export default MultiChoosePage;
