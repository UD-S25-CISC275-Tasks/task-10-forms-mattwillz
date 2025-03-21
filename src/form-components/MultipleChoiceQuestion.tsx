import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState(options[0]);

    return (
        <div>
            <h3>Select an Option:</h3>
            <select
                value={selectedChoice}
                onChange={(e) => {setSelectedChoice(e.target.value)}}
                role="combobox"
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>
                {selectedChoice === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
