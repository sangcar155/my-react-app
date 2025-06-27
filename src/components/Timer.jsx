import React, { useState, useEffect, useRef } from 'react';

function Timer() {
  const [count,setCount]=useState(()=>{
    const saved = localStorage.getItem('timerCount');
    return saved?parseInt(saved):0;
  });

  const timerRef = useRef(null);

  useEffect(()=>
  {
    localStorage.setItem('timerCount',count)
  },

  [count]);

  const startTimer = () =>
  {
    if(!timerRef.current)
    {
        timerRef.current = setInterval(()=>{
            setCount(prev=>prev + 1);
        } ,
            1000);
    }
  }

  const stopTimer = ()=>{
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>⏱️ Timer: {count} seconds</h2>
      <button onClick={startTimer} style={{ marginRight: '10px' }}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;
