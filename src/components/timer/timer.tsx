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

    const getTimeInTwoDigitsFormat = (timeUnit: number): string => timeUnit.toFixed(0).length === 1 ? `0${timeUnit}` : timeUnit.toFixed(0);

    const stringifiedMinutes = getTimeInTwoDigitsFormat(minutes);
    const stringifiedSeconds = getTimeInTwoDigitsFormat(seconds);

    return (
        <div className="timer__container">
            <h3 className="timer__label">
                {label}
            </h3>
            <div className="timer__main">
                <div className="timer__mainDigit">
                    {stringifiedMinutes}
                </div>
                <p>:</p>
                <div className="timer__mainDigit">
                    {stringifiedSeconds}
                </div>
            </div>
            <button className="timer__resetButton" onClick={reset}>RESET</button>
        </div>
    )
};