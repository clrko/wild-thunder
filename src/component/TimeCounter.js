import * as React from "react";

function TimeCounter() {
    const [counter, setCounter] = React.useState(30);
  
  
    React.useEffect(() => {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);
  
    return (
      <div className="TimeCounter">
        <div>Countdown: {counter}</div>
      </div>
    );
  }

  export default TimeCounter