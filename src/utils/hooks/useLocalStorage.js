/* eslint-disable no-undef */
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    let persistValue;
    if (typeof window !== 'undefined') {
      persistValue = localStorage.getItem(key);
    }
    return persistValue ? initialValue : persistValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
