import React from 'react';

const ErrorExample = () => {
  const handleClick = () => {
    title = 'hello people '
  }
  let title = 'random title'
  return <React.Fragment>
    <h2>{title}</h2>
    <button type='button' className='btn' onClick={handleClick}>Change title</button>
  </React.Fragment>
};

export default ErrorExample;
