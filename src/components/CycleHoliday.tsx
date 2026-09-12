import React, { useState } from "react";
import { Button } from "react-bootstrap";
export type Holiday = "🎄" | "🎂" | "🎃" | "🎆" | "🌎";
//christmas, my Birthday(sept 2), halloween, new years DAY , earth day
const ALPHABETICAL_TRANSITIONS: Record<Holiday, Holiday> = {
    "🎂": "🎄",
    "🎄": "🌎",
    "🌎": "🎃",
    "🎃": "🎆",
    "🎆": "🎂",
};
const NUMERICAL_TRANSITION: Record<Holiday, Holiday> = {
    "🎆": "🌎",
    "🌎": "🎂",
    "🎂": "🎃",
    "🎃": "🎄",
    "🎄": "🎆",
};
export function CycleHoliday(): React.JSX.Element {
    const [hoilday, setHoliday] = useState<Holiday>("🎂");
    function alphChange(): void {
        const newHoliday = ALPHABETICAL_TRANSITIONS[hoilday];
        setHoliday(newHoliday);
    }
    function numChange(): void {
        const newHoliday = NUMERICAL_TRANSITION[hoilday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            Cycle Holiday
            <div>Holiday: {hoilday}</div>
            <div>
                <Button onClick={alphChange}>Advance by Alphabet</Button>
            </div>
            <div>
                <Button onClick={numChange}>Advance by Year</Button>
            </div>
        </div>
    );
}
