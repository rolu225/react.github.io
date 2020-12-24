import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setfirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && email){
      const person = {id: new Date().getTime().toString(), firstName, email};
      setPeople((people)=>{
        return [...people, person];
      });
      setfirstName('');
      setEmail('');
    } else {
      console.log('Please enter')
    }
  }
  return ( <>
    <section>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='firstname'>Name:</label>
          <input id='firstname' type='text' name='firstname' value={firstName} onChange={(e) => setfirstName(e.target.value)}/>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <button className='btn' type='submit'>Add</button>
      </form>
      {people.map((person, index)=>{
        const {id, firstName, email} = person;
        return <div key={index} className='item'>
          <h4>{firstName}</h4>
          <p>{email}</p>
        </div>
      })}
    </section>
  </>
  )
};

export default ControlledInputs;
