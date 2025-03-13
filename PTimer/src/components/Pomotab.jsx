import { useState, useEffect } from "react";

export default function Hero() {
  const [mins, setMins] = useState(24);
  const [secs, setSecs] = useState(59); // Start at 59 seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (secs === 0) {
          if (mins === 0) {
            // Timer ends
            clearInterval(interval);
            setIsRunning(false);
          } else {
            // Decrease minutes and reset seconds
            setMins((prevMins) => prevMins - 1);
            setSecs(59);
          }
        } else {
          // Decrease seconds
          setSecs((prevSecs) => prevSecs - 1);
        }
      }, 1000); // Update every second
    }

    // Cleanup interval on component unmount or when timer stops
    return () => clearInterval(interval);
  }, [isRunning, mins, secs]);

  const toggleCounterBtn = () => {
    setIsRunning((prevState) => !prevState); // Toggle timer on/off
  };

  return (
    <div className="con_tainer">
      <div className="tabs_pomo">
        <button onClick={toggleCounterBtn}>
          {isRunning ? "Pause" : "Start Task"}
        </button>
        <button>Start Break</button>
      </div>

      <div className="time_pomo">
        <div className="minutes_time">
          <div>mm</div>
          <div className="m_time">{mins < 10 ? "0" + mins : mins}</div>
        </div>
        :
        <div className="seconds_time">
          <div>ss</div>
          <div className="s_time">{secs < 10 ? "0" + secs : secs}</div>
        </div>
      </div>
    </div>
  );
}