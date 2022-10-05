import * as React from 'react';
import './style.css';

export default function App() {

  const [ number, setNumber ] = React.useState(1);

  return (
    <div>
      <h1>Hello StackBlitz!  {number}</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => setNumber(number+1) }> Aumentar Nùmero </button>
    </div>
  );
}
