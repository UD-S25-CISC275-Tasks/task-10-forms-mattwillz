import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState(0);

    function handleUseAttempt() {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    }

    function handleGainAttempts() {
        const numAttempts = parseInt(requestedAttempts.toString(), 10);
        if (!isNaN(numAttempts) && numAttempts > 0) {
            setAttemptsLeft(attemptsLeft + numAttempts);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={(e) => {setRequestedAttempts(Number(e.target.value))}}
            />
            <button onClick={handleUseAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={handleGainAttempts}>Gain</button>
        </div>
    );
}
