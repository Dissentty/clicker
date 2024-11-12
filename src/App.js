import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [counter, setCounter] = React.useState(0);
  const [income, setIncome] = React.useState(0);
  const [costMine, setCostMine] = React.useState(50);

  const click = () => {
    setCounter(counter + 1);
  }
  
  const buy_mine = () => {
    if (counter >= costMine) {
      setIncome((prevValue) => prevValue + 1);
      setCounter((prevValue) => prevValue - costMine);
      setCostMine((prevValue) => prevValue * 1.1);
    }
  }

  const buy_pub = () => {
    if (counter >= 500) {
      setIncome(income + 12);
      setCounter(counter - 500);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevValue) => prevValue + income); // увеличиваем значение
    }, 1000); // интервал в 1 секунду

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, [income]);

  return (
    <div className="App">
      <header className="App-header">
        <aside>
          <div>Shop</div>
          <p>Buy mine (-{costMine.toFixed(1)} points, +1 income)</p>
          <button onClick={buy_mine}>buy mine</button>
          <p>Buy pub (-500 points, +12 income)</p>
          <button onClick={buy_pub}>buy pub</button>
        </aside>
        <aside className="leftPad">
        passive income: {income}
        </aside>
        <div>{counter.toFixed(1)}</div>
          <button onClick={click}>
            click
          </button>
      </header>
    </div>
  );
}

export default App;
