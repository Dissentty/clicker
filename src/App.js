import './App.css';
import React, {useEffect} from 'react';
import Research_B from "./research_b";

function App() {
  const [counter, setCounter] = React.useState(0);
  const [income, setIncome] = React.useState(0);
  const [costMine, setCostMine] = React.useState(50);
  const [costPub, setCostPub] = React.useState(1000);
  const [costWorkshop, setCostWorkshop] = React.useState(10000);
  const [clickPower, setClickPower] = React.useState(1);
  const [isPubVisible, setIsPubVisible] = React.useState(false);
  const [isWorkshopVisible, setIsWorkshopVisible] = React.useState(false);
  const [multi, setMulti] = React.useState(1);
  const [countPrestiges, setCountPrestiges] = React.useState(0);
  const [countClicks, setCountClicks] = React.useState(0);

  const click = () => {
    setCounter(counter + clickPower * multi);
    setCountClicks((prevValue) => prevValue + 1);
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

  const buy_workshop = () => {
    if (counter >= costWorkshop) {
      setIncome((prevValue) => prevValue + 140);
      setCounter((prevValue) => prevValue - costWorkshop);
      setCostWorkshop((prevValue) => prevValue * 1.1);
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
  
  const handleVisibilityChange2 = (isVisible2) => {
    setIsWorkshopVisible(isVisible2);
  };

  const prestige  = () => {
    if (counter >= 50000) {
      setCounter(50);
      setIncome(0);
      setCostPub(1000);
      setCostMine(50);
      setMulti((prevValue) => prevValue * 1.1);
      setCountPrestiges((prevValue) => prevValue + 1);
      setCostWorkshop(10000);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <aside>
          <div className="card">Shop
          <p>Buy mine (-{costMine.toFixed(1)} points, +1 income)</p>
          <button onClick={buy_mine}>buy mine</button>
          </div>
          {isPubVisible && <div className='card'>
          <p>Buy pub (-{costPub.toFixed(1)} points, +12 income)</p>
          <button onClick={buy_pub}>buy pub</button>
            </div>}
          {isWorkshopVisible && <div className='card'>
          <p>Buy workshop (-{costWorkshop.toFixed(1)} points, +140 income)</p>
          <button onClick={buy_workshop}>buy workshop</button>
          </div>}
          <div className='card'>
          Multi: {multi.toFixed(2)} <br/>
          count of prestiges: {countPrestiges}
          <button onClick={prestige}>prestige</button>
          </div>
        </aside>
        <aside className="leftPad">
          <div className='card'>
        passive income: {income}
        </div>
          <Research_B onVisibilityChange={handleVisibilityChange} onVisibilityChange2={handleVisibilityChange2}/> 
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
