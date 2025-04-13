import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); 
  const [word, setWord] = useState("First Word")// საწყისი მნიშვნელობა: 0
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [age, setAge] = useState(100);

  const firstNameInput = document.getElementById("firstNameInput");
  const lastNameInput = document.getElementById("lastNameInput");
  const ageInput = document.getElementById("ageInput");

  const changeData = () => {
    setFirstName(firstNameInput.value);
    setLastName(lastNameInput.value);
    setAge(ageInput.value);
  }

  const increaseCount = (e) => {
    setCount(count + 1); // state-ის განახლება
  };

  const changeText = (e) => {
    setWord(e.target.value);
    console.log(word);
  }
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
      <p>სახელი: {firstName}; გვარი: {lastName}; ასაკი: {age}</p>
    </div>
  );
}

export default Counter;
