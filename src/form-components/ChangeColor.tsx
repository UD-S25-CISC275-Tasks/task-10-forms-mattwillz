import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "cyan",
    ];

    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
        <div>
            <h3>Select a Color:</h3>
            {colors.map((color) => (
                <Form.Check
                    key={color}
                    type="radio"
                    inline
                    label={color}
                    name="color-options"
                    value={color}
                    checked={selectedColor === color}
                    onChange={() => {
                        setSelectedColor(color);
                    }}
                    style={{ backgroundColor: color }}
                />
            ))}
            You have chosen{" "}
            <span
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: "white",
                    textAlign: "center",
                }}
            >
                {selectedColor}
            </span>
        </div>
    );
}
