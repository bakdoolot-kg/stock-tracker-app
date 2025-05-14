import React, {useState} from 'react';
import stockData from './data/stockData';
import Stock from './components/Stock';
import './style.css';
import appLogo from './images/app-logo.svg';

export default function App() {
  const [currentData, setCurrentData] = React.useState(stockData);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCurrentData(prev =>
        prev.map(s => ({
          ...s,
          currentPrice: +(
            Math.random() > 0.5
              ? s.currentPrice + Math.random() * 20
              : s.currentPrice - Math.random() * 20
          ).toFixed(2)
        }))
      );
    }, 4000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <header>
        <img className="app-logo" src={appLogo} alt="Logo" />
        <h1><span>Bakdoolot's Stock Tracker company</span></h1>
      </header>

      <div className="wrapper">
        {currentData.map(stock => (
          <Stock key={stock.stockName} stock={stock} />
        ))}
      </div>
    </div>
  );
}
