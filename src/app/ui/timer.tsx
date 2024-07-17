"use client";

import { useState, useEffect } from "react";

function Timer() {
    // Function to format the remaining time as MM:SS
    function formatTime(time: number) {
        const minutes = Math.floor(time / 1000 / 60);
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Function to get the difference between the target time and the current time
    function getTargetTimeDifference() {
        if (typeof window !== 'undefined') {
            let dateString = window.localStorage.getItem('finalTime');
            if (dateString == null) {
                dateString = (new Date()).toString();
            }
            const now = new Date().getTime();
            const targetDate = new Date(dateString);
            const difference = targetDate.getTime() - now;
            return Math.max(difference, 0); // Ensure non-negative time
        }
        return 0; // Return 0 if window is not available
    }

    // State to store the remaining time in milliseconds
    const [remainingTime, setRemainingTime] = useState<number>(getTargetTimeDifference());

    // Effect to set up the timer and clean up the interval on unmount
    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(getTargetTimeDifference());
        }, 1000);

        // Clear the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="">
            <h1>Countdown Timer</h1>
            <h2 className="text-red-600 font-bold text-5xl">{formatTime(remainingTime)}</h2>
        </div>
    );
}

export default Timer;
