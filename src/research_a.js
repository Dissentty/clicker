import { useEffect } from "react";
import React from 'react';

function Reseach_A({ onVisibilityChange, onVisibilityChange2 }) {
  const [time_1, setTime1] = React.useState(30);
  const [time_2, setTime2] = React.useState(90);
  const [isResearching, setIsResearching] = React.useState(false);
  const [isResearching1, setIsResearching1] = React.useState(false);
  const [isResearching2, setIsResearching2] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [isVisible2, setIsVisible2] = React.useState(true);

  const startResearch = () => {
    if (!isResearching) {
      setIsResearching(true);
      setIsResearching1(true);
    }
  }

  const startResearch2 = () => {
    if (!isResearching) {
      setIsResearching(true);
      setIsResearching2(true);
    }
  }
  
  useEffect(() => {
    if (isResearching1 && time_1 > 0) {
      const timer1 = setTimeout(() => {
        setTime1((prevValue) => prevValue - 1);
      }, 1000);
      return () => clearTimeout(timer1);
    } else if (time_1 === 0 && isResearching1) {
      // input pubs
      setIsVisible(false);
      setIsResearching(false);
      setIsResearching1(false);
      onVisibilityChange(true);
    } 

  }, [isResearching1, time_1, onVisibilityChange]);
  
  useEffect(() => {
    if (isResearching2 && time_2 > 0) {
      const timer2 = setTimeout(() => {
        setTime2((prevValue) => prevValue - 1);
      }, 1000);
      return () => clearTimeout(timer2);

    } else if (time_2 === 0 && isResearching2) {
      setIsResearching(false);
      setIsResearching2(false);
      setIsVisible2(false);
      onVisibilityChange2(true);
    }
  }, [isResearching2, time_2, onVisibilityChange2])
  
  return (
  <div>
      {isVisible && <div className="card">
    Изучение пабов {time_1} <br/>
    <button onClick={startResearch}>
      start research
    </button>
    </div>}
      {isVisible2 && <div className="card">
      Изучение мастерских {time_2}
      <button onClick={startResearch2}>
      start research
      </button> </div>}
  </div>
    )
}

export default Reseach_A;
