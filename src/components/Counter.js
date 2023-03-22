import React from 'react';
import { useState } from 'react';
import './Counter.css';

function Counter() {
    const [ count, setCount ] = useState(0);

    const increment = () => {
        setCount((prev) => prev + 1);
    };

    const reset = () => {
        setCount(0);
    };

    const decrement = () => {
        setCount((prev) => prev - 1);
    };

  return (
    <div id="box">
        <h1>Counter</h1>
        <h1 id="number">{count}</h1>
        <div id="container">
            <div id="decrease" onClick={decrement}>
                Decrease
            </div>
            <div id="reset" onClick={reset}>
                Reset
            </div>
            <div id="increase" onClick={increment}>
                Increase
            </div>
         </div>
    </div>
  )
}

export default Counter;