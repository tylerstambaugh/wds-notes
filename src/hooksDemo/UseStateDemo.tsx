import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function adjustCount(amount: number) {
    setCount((currentCount) => {
      return currentCount + amount;
    });
  }

  return (
    <>
      <button onClick={() => adjustCount(-1)}>-</button>
      <button onClick={() => adjustCount(1)}>+</button>
    </>
  );
}
