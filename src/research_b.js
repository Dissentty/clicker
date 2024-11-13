import React, { useEffect, useRef } from "react";

function Research_B({ onVisibilityChange, onVisibilityChange2 }) {
  const [time_1, setTime1] = React.useState(30);
  const [time_2, setTime2] = React.useState(90);
  const [isResearching1, setIsResearching1] = React.useState(false);
  const [isResearching2, setIsResearching2] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [isVisible2, setIsVisible2] = React.useState(true);

  const timer1Ref = useRef(null);
  const timer2Ref = useRef(null);

  const startResearch1 = () => {
    if (!isResearching1) {
      setIsResearching1(true);
      timer1Ref.current = setInterval(() => {
        setTime1((prevTime) => prevTime - 1);
      }, 1000);
    }
  };

  const startResearch2 = () => {
    if (!isResearching2) {
      setIsResearching2(true);
      timer2Ref.current = setInterval(() => {
        setTime2((prevTime) => prevTime - 1);
      }, 1000);
    }
  };

  // Effect for handling time_1 completion
  useEffect(() => {
    if (time_1 <= 0 && isResearching1) {
      clearInterval(timer1Ref.current);
      setIsVisible(false);
      setIsResearching1(false);
      onVisibilityChange(true);
    }
  }, [time_1, isResearching1, onVisibilityChange]);

  // Effect for handling time_2 completion
  useEffect(() => {
    if (time_2 <= 0 && isResearching2) {
      clearInterval(timer2Ref.current);
      setIsVisible2(false);
      setIsResearching2(false);
      onVisibilityChange2(true);
    }
  }, [time_2, isResearching2, onVisibilityChange2]);

  // Clear timers on component unmount
  useEffect(() => {
    return () => {
      clearInterval(timer1Ref.current);
      clearInterval(timer2Ref.current);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="card">
          Изучение пабов {time_1} <br />
          <button onClick={startResearch1}>start research</button>
        </div>
      )}
      {isVisible2 && (
        <div className="card">
          Изучение мастерских {time_2} <br />
          <button onClick={startResearch2}>start research</button>
        </div>
      )}
    </div>
  );
}

export default Research_B;
