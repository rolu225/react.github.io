import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState('default');
  
  useEffect(()=>{
    fetch(url)
    .then((response) => {
      if(response.status >= 200 && response.status <= 299){
        return response.json();
      }
      else {
        setLoading(false)
        setError(true)
        throw new Error (response.statusText)
      }
    })
    .then((user) => {
      const {login} = user;
      setUser(login);
      setLoading(false);
    })
    .catch((error) => console.log(error))
  }, []);

  if(loading){
    return <div>
      <h2>Loading...</h2>
    </div>
  }
  if(error){
    return <div>
      <h2>Error...</h2>
    </div>
  }
  return <div>
    <h2>{user}</h2>
  </div>
};

export default MultipleReturns;
