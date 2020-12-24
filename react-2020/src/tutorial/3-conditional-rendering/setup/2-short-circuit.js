import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('false');
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return <>
    <h1>{text || 'John John'}</h1>
    <button className='btn' onClick={()=> setError(!error) }>error</button>
    {error && <h1>Error...</h1>}
    {error ? <p>There is an error...</p>: <div>
      <h2>There is no error</h2>  
    </div>}
  </>
};

export default ShortCircuit;
