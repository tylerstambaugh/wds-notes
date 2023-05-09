import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  //don't use this b/c count isn't current:
  //   function adjustCount2(amount: number) {
  //     setCount(count + amount)
  //   }

  //use the setCount method version instead.
  function adjustCount(amount: number) {
    setCount((currentCount) => {
      return currentCount + amount;
    });
  }

  return (
    <>
      <button onClick={() => adjustCount(-1)}>-</button>
      {count}
      <button onClick={() => adjustCount(1)}>+</button>
    </>
  );
}
