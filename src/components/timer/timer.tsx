import * as React from "react";
import { useTimer } from "../../hooks/useTimer";

import "./timer.scss";

export interface TimerProps {
    timeInSeconds: number;
    timerId: string | number;
    onTimeExpired?: () => void;
    label?: string;
}

export const Timer: React.FC<TimerProps> = ({ timeInSeconds, onTimeExpired, label, timerId }) => {
    const { seconds, minutes, reset } = useTimer(timeInSeconds, timerId, onTimeExpired);

    const getTimeInTwoDigitsFormat = (time: number): string => {
        const timer = time.toFixed(0);

        if (timer.length === 1) {
            return `0${timer}`;
        } else {
            return timer.toString();
        }
    }

    const stringifiedMinutes = getTimeInTwoDigitsFormat(minutes);
    const stringifiedSeconds = getTimeInTwoDigitsFormat(seconds);

    return (
        <div>
            <h3 className="label">
                {label}
            </h3>
            <div className="timer">
                <div className="digit">
                    {stringifiedMinutes}
                </div>
                <p>:</p>
                <div className="digit">
                    {stringifiedSeconds}
                </div>
            </div>
            <button className="reset__button" onClick={reset}>RESET</button>
        </div>
    )
};