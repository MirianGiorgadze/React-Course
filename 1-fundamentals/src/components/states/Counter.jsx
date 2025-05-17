import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // საწყისი მნიშვნელობა: 0

  const [person, setPerson] = useState(
    {firstName: "John", lastName: "Doe", age: 100});

  const ageInput = document.getElementById("ageInput");

  const changeData = () => {
     setPerson({...person, age: ageInput.value});
  }

  const increaseCount = () => {
    setCount(count + 1); // state-ის განახლება
  };

  useEffect(
    () => {console.log("Person value changed!")},
    [person, count]
  );

  useEffect(
    () => {console.log("Initialized!")},
    []
  );

  useEffect(
    () => {console.log("useEffect function #2 invoked!")}
  );

  return (
    <div>
      {/* <p>Count: {count}</p>
      <button onClick={increaseCount}>Add +1</button>
      <p id={"result"}></p>
      <input type='text' onBlur={changeText}></input>
      <p style={{color: "red"}}>{word}</p> */}
      <input type="text" id="firstNameInput" placeholder='სახელი' onChange={changeData}></input>
      <input type="text" id="lastNameInput" placeholder='გვარი' onChange={changeData}></input>
      <input type="text" id="ageInput" placeholder='ასაკი' onChange={changeData}></input>
      <p>სახელი: {person.firstName}; გვარი: {person.lastName}; ასაკი: {person.age}</p>
      <div>
        <button onClick={increaseCount}>Counter</button>
        <p>{count}</p>
      </div>
    </div>
  );
}

export default Counter;
