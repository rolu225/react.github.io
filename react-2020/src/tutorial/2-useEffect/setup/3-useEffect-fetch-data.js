import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  const divStyle = {
    background: '#e3e3d8',
    margin: '11em',
    padding: '1em',
    fontFamily: ''
  }
  
  return (
    <>
      <h2 style={{margin: '2em 0'}}>Git Users</h2>
      <ul className="user">
        {users.map((user) => {
          const {id, login, avatar_url, html_url} = user;
          return(
              <div style={divStyle}>
                <li key={id} style={{margin: '3em 0'}}>
                  <img src={avatar_url} alt={login}/>
                  <div >
                    <h2 style={{color: 'red'}}>{id}</h2>
                    <h4>{login}</h4>
                    <a href={html_url}>Profile</a>
                  </div>
                </li>
              </div>
          );
        })}
      </ul>
    </>
  )
};

export default UseEffectFetchData;
