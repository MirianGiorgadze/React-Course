import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};
const RandomComponent = () => {
  useEffect(() => {
    // console.log('მაგალითი');
    const intID = setInterval(() => {
      console.log('hello from interval');
    }, 1000);
    // არ ჩერდება ყველა რენდერზე
    return () => clearInterval(intID);
    // ყველა რენდერზე შეიქმნება ახალი ინტერვალი
  }, []);

  return <h1>hello there</h1>;
};
export default CleanupFunction;