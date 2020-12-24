import React, { useState } from 'react';

const UseStateObject = () => {
  
  const changeMessage = () => {
    // setPerson({...person, message: 'Manchester United'})
    setName('Donny Beek')
    setAge('23')
    setMessage('Im a good boy. To rich')
  }

  const[person, setPerson] = useState({
    name:'Ronaldo', 
    age:33, 
    message:'Professor Soccer'
  });

  const[name, setName] = useState('Ronaldo')
  const[age, setAge] = useState(33)
  const[message, setMessage] = useState('Professor Soccer')

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>Change Messages</button>
    </>
  );
};

export default UseStateObject;
