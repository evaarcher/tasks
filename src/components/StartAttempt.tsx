import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [started, setStarted] = useState<boolean>(false);
    function startQuiz(): void {
        setAttempt(attempt - 1);
        setStarted(true);
    }
    function stopQuiz(): void {
        setStarted(false);
    }
    function increaseAttempts(): void {
        setAttempt(attempt + 1);
    }
    return (
        <div>
            <div>
                <Button onClick={startQuiz} disabled={attempt === 0 || started}>
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={stopQuiz} disabled={!started}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={increaseAttempts}
                    disabled={started ? true : false}
                >
                    Mulligan
                </Button>
            </div>
            <div>Attempts left : {attempt} </div>
        </div>
    );
}
