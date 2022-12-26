import * as React from "react";

export interface TimerState {
    time: number;
    seconds: number;
    minutes: number;
}


const getDefaultMinutes = (time: number) => time >= 60 ? Math.floor(time / 60) : 0;

const getDefaultSeconds = (time: number) => time < 60 ? calculateSeconds(time) + 1 : 0;

const calculateSeconds = (time: number) => time - Math.floor((time - 1) / 60) * 60 - 1;




export const useTimer = (timeInSeconds: number, timerId: string | number, onTimeExpired: (() => void) | undefined) => {
    
    const originalTimerValueKey = `timer_original_value_${timerId}`;
    const timerValueKey = `timer_value_${timerId}`;

    const time = +(localStorage.getItem(timerValueKey) ?? timeInSeconds);

    const [timeState, setTimeState] = React.useState<TimerState>({
        time,
        seconds: getDefaultSeconds(time),
        minutes: getDefaultMinutes(time)
    });


    React.useEffect(() => {
        localStorage.setItem(originalTimerValueKey, timeInSeconds.toString());
    }, []);

    React.useEffect(() => {
        const timerIntervalId = setInterval(() => {
            if (timeState.time === 0) {
                localStorage.removeItem(timerValueKey);

                if (onTimeExpired !== undefined) {
                    onTimeExpired();
                }
                return;
            }
            const newState = {
                time: timeState.time - 1,
                minutes: +(Math.floor((timeState.time - 1) / 60).toFixed(1)),
                seconds: +(calculateSeconds(timeState.time).toFixed(1))
            };
            setTimeState(newState);
            localStorage.setItem(timerValueKey, newState.time.toString());
        }, 1000);

        return () => clearInterval(timerIntervalId);
    }, [timeState]);


    const resetHandler = () => {
        let originalTime = localStorage.getItem(originalTimerValueKey) ?? timeInSeconds;
        originalTime = Number(originalTime);

        setTimeState({
            time: +originalTime,
            seconds: getDefaultSeconds(originalTime),
            minutes: getDefaultMinutes(originalTime)
        });
    }


    return {
        minutes: timeState.minutes,
        seconds: timeState.seconds,
        reset: resetHandler
    };
};