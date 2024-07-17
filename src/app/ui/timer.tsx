"use client";

import { useState, useEffect } from "react";

function Timer() {
    function formatTime(time: number) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function getTargetTimeDifference() {
        let dateString = window.localStorage.getItem('finalTime');
        if (dateString == null) {
            dateString = (new Date()).toString();
        }
        const now = new Date().getTime();
        const targetDate = new Date(dateString);
        const difference = targetDate.getTime() - now;
        return Math.max(difference, 0); // Ensure non-negative time
    }

    const [remainingTime, setRemainingTime] = useState<number>(getTargetTimeDifference());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(getTargetTimeDifference());
        }, 1000);

        return () => {
            clearInterval(intervalId); // Clean up the interval on component unmount
        };
    }, []);

    return (
        <div className="">
            <h1>Countdown Timer</h1>
            <h2 className="text-red-600 font-bold text-5xl">{formatTime(remainingTime)}</h2>
        </div>
    );
}

export default Timer;
