import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import {data} from '../../../data'
import {reducer} from './reducer'

const defaultState = { 
  people: [],
  isModal: false,
  modalContent: '',
}
const Index = () => {
  const [name, setName] = useState('');
  // const [people, setPeople] = useState(data);
  // const [show, setShow] = useState(false);
  const [state, setState] =  useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
      const newItem = {id: new Date().getTime().toString(), name}
      setState({type: 'Add item', load: newItem})
      setName('')
    }
    else {
      setState({type: 'No value'})
    }
  };
  const closeModal = () => {
    setState({type: 'Close modal'})
  }
  return (<>
    {state.isModal && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        <button type='submit' className='btn btn-primary'>Add</button>
      </div>
    </form>
    {state.people.map((person)=>{
      return(<>
        <div key={person.id} className='item'>
          <h4>{person.name}</h4>
          <button onClick={()=> setState({type: 'Remove item', load: person.id})}>Remove</button>
        </div>
      </>)
    })}
  </>);
};

export default Index;
