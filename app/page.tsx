import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButtonSubtract />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function MyButtonSubtract() {
  const [count, setCount] = useState(0);

  function handleClickSubtract() {
    setCount(count - 1);
  }

  return (
    <button onClick={handleClickSubtract}>
      Clicked {count} times
    </button>
  );
}
