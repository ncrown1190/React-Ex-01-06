import { useState } from "react";
import "./UpDownCounter";

export default function UpDownCounter() {
  const [count2, setCount2] = useState(5);
  const [count, setCount] = useState(2);
  //let example = 30;
  return (
    <div className="UpDownCounter">
      <button
        onClick={() => {
          setCount((prv) => prv + 1);
        }}
      >
        Up
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prv) => prv - 1);
        }}
      >
        Down
      </button>
      {/* <h2>{count2}</h2> */}
      {/* <p>{example}</p>
      <button
        onClick={() => {
          example += 1;
          console.log(example);
        }}
      >
        raise example
      </button> */}
    </div>
  );
}
