import React, {useState} from 'react';

export default function Stock({ stock }) {
  const { stockName, logo, currentPrice, prevClosingPrice } = stock;
  console.log(logo);
  
  // 1) Compute numerical change and rate change
  const numericalChange = parseFloat(
    (currentPrice - prevClosingPrice).toFixed(2)
  );
  const rateChange = parseFloat(
    ((numericalChange / prevClosingPrice) * 100).toFixed(2)
  );

  // 2) Determine arrow and color class
  const arrow = numericalChange > 0
    ? '⬆'
    : numericalChange < 0
    ? '⬇'
    : '▬';

  const colorClass = numericalChange > 0
    ? 'green'
    : numericalChange < 0
    ? 'red'
    : undefined;

  return (
    <div className="stock-container">
      {/* Price change section */}
      <div className={colorClass}>
        <p>{arrow}{numericalChange.toFixed(2)}</p>
        <p><span>{rateChange.toFixed(2)}%</span></p>
      </div>

      {/* Stock logo */}
      <div>
        <img src={logo} alt={`${stockName} logo`}/>
      </div>

      {/* Stock symbol/name */}
      <div>
        {stockName}
      </div>

      {/* Current price */}
      <div>
        <p>{currentPrice.toFixed(2)}</p>
        <p>USD</p>
      </div>

      {/* Previous closing price */}
      <div>
        <p>Prev Close: {prevClosingPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}