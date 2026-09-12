import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);
    function rollLeft(): void {
        setLeftDie(d6());
    }
    function rollRight(): void {
        setRightDie(d6());
    }
    function rateRoll(left: number, right: number): string {
        return (
            left === right ?
                left === 1 ?
                    "You Lose!"
                :   "You Win!"
            :   ""
        );
    }
    return (
        <div>
            Two Dice
            <div>
                <span data-testid="left-die">Left Die :{leftDie}</span>
            </div>
            <div>
                <span data-testid="right-die">Right Die :{rightDie}</span>
            </div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
            </div>
            <div>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            <span>{rateRoll(leftDie, rightDie)}</span>
        </div>
    );
}
