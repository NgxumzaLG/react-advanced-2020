import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // If text is falsey then assign the defualt value 'hello world', but if its truthy then assign the value of text.
  const firstValue = text || 'hello world';
  // If text is falsey then by defualt receives an empty string/value, but if its truthy then assign 'hello world'.
  const secondValue = text && 'hello world';
  // *****Opposite of the current one = setIsError(!isError)*****NB

  return (
    <>
      <h2>{firstValue}</h2>
      <h2>Value: {secondValue}</h2>
      <h2>{text || 'hello world'}</h2>
      <button className='btn' onClick={() => setIsError(!isError)}>
        Toogle error
      </button>
      {isError && <h2 style={{ color: 'red' }}>Error...</h2>}
      {isError ? <h4>There is an error</h4> : <h4>There is no error</h4>}
    </>
  );
};

export default ShortCircuit;
