import React, { useState } from 'react';

const UseStateCounter = () => {
  const[value, setValue] = useState(0)
  const reset = () =>{
    setValue(0)
  }
  const addComplex = () => {
    setTimeout(() =>{
      // setValue(value + 1)
      setValue((prevState) =>{
        return prevState + 1
      });
    },1000)
  }
  return (
    <>
      <section style={{margin: '3em 0'}}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={()=>setValue(value + 1)}>Increase</button>
        <button className='btn' onClick={reset}>Reset</button>
        <button className='btn' onClick={()=>setValue(value - 1)}>Decrease</button> 
      </section>
      <section style={{margin: '2em 0'}}>
        <h2>More complex</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={addComplex}>Add</button>
      </section>
    </>
  );
};

export default UseStateCounter;
