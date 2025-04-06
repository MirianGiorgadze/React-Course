import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // საწყისი მნიშვნელობა: 0

  const increaseCount = () => {
    setCount(count * 2); // state-ის განახლება
  };



  // let count = 0; // საწყისი მნიშვნელობა: 0

  // const increaseCount = () => {
  //   count = count + 1; 
  //   console.log(count);
  // };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Add +1</button>
      <p id={"result"}></p>
    </div>
  );
}

export default Counter;
