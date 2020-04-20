import React from "react";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./Counter.css";

const renderTime = value => {
  if (value === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="text">You can do it</div>
      <div className="value">{value}</div>
      <div className="text">seconds</div>
    </div>
  );
};


function TimerCounter() {
  return (
    <div className="TimeCounter">
     
      <CountdownCircleTimer
        isPlaying
        durationSeconds={30}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
        renderTime={renderTime}
        onComplete={() => [false, 1000]}
      />
      
    </div>
  );
}

export default TimerCounter
