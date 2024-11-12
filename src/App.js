import './App.css';
import React, {useEffect, useState} from 'react';
import Research_A from "./research_a";

function App() {
  const [counter, setCounter] = React.useState(0);
  const [income, setIncome] = React.useState(0);
  const [costMine, setCostMine] = React.useState(50);
  const [costPub, setCostPub] = React.useState(1000);
  const [clickPower, setClickPower] = React.useState(1);
  const [isPubVisible, setIsPubVisible] = React.useState(false);
  const [multi, setMulti] = React.useState(1);
  const [countPrestiges, setCountPrestiges] = React.useState(0);

  const click = () => {
    setCounter(counter + clickPower * multi);
  }
  
  const buy_mine = () => {
    if (counter >= costMine) {
      setIncome((prevValue) => prevValue + 1);
      setCounter((prevValue) => prevValue - costMine);
      setCostMine((prevValue) => prevValue * 1.1);
    }
  }

  const buy_pub = () => {
    if (counter >= costPub) {
      setIncome((prevValue) => prevValue + 12);
      setCounter((prevValue) => prevValue - costPub);
      setCostPub((prevValue) => prevValue * 1.1);
    }
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevValue) => prevValue + income * multi); // увеличиваем значение
    }, 1000); // интервал в 1 секунду

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, [income]);

  const handleVisibilityChange = (isVisible) => {
    setIsPubVisible(isVisible);
  };

  const prestige  = () => {
    if (counter >= 50000) {
      setCounter(0);
      setIncome(0);
      setCostPub(1000);
      setCostMine(50);
      setMulti((prevValue) => prevValue * 1.1);
      setCountPrestiges((prevValue) => prevValue + 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <aside>
          <div>Shop</div>
          <p>Buy mine (-{costMine.toFixed(1)} points, +1 income)</p>
          <button onClick={buy_mine}>buy mine</button>
          {isPubVisible && <div>
          <p>Buy pub (-{costPub.toFixed(1)} points, +12 income)</p>
          <button onClick={buy_pub}>buy pub</button>
            </div>}
          <div>
          Multi: {multi} <br/>
          count of prestiges: {countPrestiges}
          </div>
            <div>
          <button onClick={prestige}>prestige</button>
          </div>
        </aside>
        <aside className="leftPad">
        passive income: {income}
          <Research_A onVisibilityChange={handleVisibilityChange}/> 
        </aside>
        <div className="counter">{counter.toFixed(0)}</div>
          <button onClick={click} className="mainButton">
            click
          </button>
      </header>
    </div>
  );
}

export default App;
