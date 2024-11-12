import { useEffect } from "react";
import React from 'react';

function Reseach_A({ onVisibilityChange }) {
  const [time_1, setTime1] = React.useState(10);
  const [isResearching, setIsResearching] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);

  const startResearch = () => {
    if (!isResearching) {
      setIsResearching(true);
      setTime1(10);
    }
  } 

  useEffect(() => {
    let timer;
    if (isResearching && time_1 > 0) {
      timer = setInterval(() => {
        setTime1((prevValue) => prevValue - 1);
      }, 1000);
    } else if (time_1 === 0 && isResearching) {
      // input pubs
      setIsVisible(false);
      setIsResearching(false);
      onVisibilityChange(true);
    }

    return () => clearInterval(timer);
  }, [isResearching, time_1, onVisibilityChange]);

  return (
  <div>
      {isVisible && <div>
    Изучение пабов {time_1}
    <button onClick={startResearch}>
      start research
    </button>
    </div>}
  </div>
  )
}

export default Reseach_A;
