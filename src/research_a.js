import { useEffect } from "react";
import React from 'react';

function Reseach_A() {
  const [time_1, setTime1] = React.useState(90);
  const [isResearching, setIsResearching] = React.useState(false);

  const startResearch = () => {
    if (!isResearching) {
      setIsResearching(true);
      setTime1(90);
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
      setIsResearching(false);
    }

    return () => clearInterval(timer);
  }, [isResearching, time_1]);

  return (
  <div>
    Изучение пабов {time_1}
    <button onClick={startResearch}>
      start research
    </button>
  </div>
  )
}

export default Reseach_A;
