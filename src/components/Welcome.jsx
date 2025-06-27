import React, { useState } from 'react';

function Welcome(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Welcome, {props.name}!</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Welcome;
