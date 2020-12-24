// reducer function
export const reducer = (state, action) => {
    if(action.type === 'Add item'){
      const newPeople = [...state.people, action.load]
      return {
        ...state,
        people: newPeople,
        isModal: true, 
        modalContent: 'Item added successfully'
      };
    }
    if(action.type === 'No value'){
      return {...state, isModal: true, modalContent: 'Enter value'}
    }
    if(action.type === 'Close modal'){
      return {...state, isModal: false}
    }
    if(action.type === 'Remove item'){
      const newPeople = state.people.filter((person)=> 
        person.id !== action.load
      )
      return{...state, people: newPeople};
    }
    throw new Error('No matching action type');
  }