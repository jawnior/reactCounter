import React, { useState, useEffect } from 'react';
import './seconds.css';

function Seconds() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    })

  return (
    <div>
        <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default Seconds;