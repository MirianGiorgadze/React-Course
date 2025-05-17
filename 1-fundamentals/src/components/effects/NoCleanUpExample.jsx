import { useEffect, useState } from 'react';

const NoCleanupExample = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        Toggle component - No Clean Up
      </button>
      {toggle && <LeakyComponent />}
    </div>
  );
};

const LeakyComponent = () => {
  useEffect(() => {
    const intID = setInterval(() => {
      console.log('hello from interval (NO CLEANUP)');
    }, 1000);
    // ❌ არ ვაბრუნებთ cleanup ფუნქციას!
  }, []);

  return <h1>hello without cleanup</h1>;
};

export default NoCleanupExample;
