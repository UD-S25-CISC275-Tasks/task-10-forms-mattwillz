import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={(e) => {
                    setUserAnswer(e.target.value);
                }}
                placeholder="Enter your answer"
            />
            <div style={{ marginTop: "10px", fontSize: "1.5rem" }}>
                {userAnswer === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
