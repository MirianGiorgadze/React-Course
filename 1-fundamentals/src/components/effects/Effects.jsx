import { useEffect, useState } from "react";

export default function Effects() {
    
    const userInput = document.getElementById("guess");
    const info = document.getElementById("info");
    const [tries, setTries] = useState(0);
    const [randomNumber, setRandomNumber] = useState(-1);

    const startGame = () => {
        setRandomNumber(Math.ceil(Math.random() * 100));
        console.log(randomNumber);
    }
    const checkAnswer = () => {
        setTries(tries + 1);
    }

    useEffect(
        () => {
            if (randomNumber != -1){
                info.textContent = "თამაში დაიწყო"
            }
        },
        [randomNumber]
    )

    useEffect(
        () => {
            console.log("Useffect function invoked");
            console.log(randomNumber);
            if (randomNumber !== -1){
                if (Number(userInput.value) > randomNumber){
                    alert("აირჩიე უფრო დაბალი...");
                }
                else if (Number(userInput.value) < randomNumber){
                    alert("აირჩიე უფრო მაღალი...");
                }
                else {
                    alert(`ყოჩაღ, გამოიცანი, ეს რიცხვი იყო ${randomNumber}`);
                }
            }
        },
        [tries]
    )

    return(
        <div>
            <button onClick={startGame}>თამაშის დაწყება</button>
            <p id={"info"}></p>
            <input type={"number"} id={"guess"}></input>
            <button onClick={checkAnswer}>დაფიქსირება</button>
            <p>ცდების რაოდენობა: {tries}</p>
        </div>
    )
}