import React, { useEffect } from "react"

import "./CountDownTimer.css"

const CountDownTimer = ({ counter, startTime, updateCounter, displaySolution }) => {

    useEffect(() => {
        const timer = counter > 0 && setInterval(() => updateCounter(), 1000);
        return () => clearInterval(timer);
    }, [counter, updateCounter]);

    useEffect(() => {
        if (counter === 0) {
            displaySolution()
        }
    }, [counter, displaySolution])

    return (
        <div className="countdown-timer">
            <div className="countdown-timer__circle">
                <svg>
                    <circle
                        className="circle changing"
                        r="48"
                        cx="52"
                        cy="52"
                        style={{ animation: `countdown-animation ${startTime}s linear, color-animation ${startTime}s linear` }}
                    />
                </svg>
            </div>
            <div className="countdown-timer__text">
                {counter}
            </div>
        </div>
    )
}

export default CountDownTimer