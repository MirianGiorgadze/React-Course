import React, { useState, useCallback, useMemo } from 'react';

const ExpensiveCalc = ({ number }) => {
  const result = useMemo(() => {
    console.log("Calculating...");
    return number * 1000;
  }, [number]);

  return <p>Calculated: {result}</p>;
};

const Button = React.memo(({ onClick }) => {
  console.log("Button re-rendered");
  return <button onClick={onClick}>Click me</button>;
});

export default function MemoCounter() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div className="card-container">
      <h2>Memoized Counter</h2>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(Number(e.target.value))}
      />
      <ExpensiveCalc number={number} />
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
    </div>
  );
}
