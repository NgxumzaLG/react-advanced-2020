import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('defualt user');

  useEffect(() => {
    // PROBLEM FIXED: Asynchronous task in a setTimeout handler
    // Error occur while I was practicing with useEffect, unfortunately it went south...
    const timer = setTimeout(() => {
      setIsVisible(false);
    });

    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then((user) => {
        const { name } = user;
        setUser(name);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }

  return <h2>{user}</h2>;
};

export default MultipleReturns;
