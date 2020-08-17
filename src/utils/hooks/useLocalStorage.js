/* eslint-disable no-undef */
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const persistValue = localStorage.getItem(key);
    return persistValue ? initialValue : persistValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
