import { useEffect, useState } from 'react';

const useLocalStorage = <TState>(key: string, newState: TState) => {
  const [state, setState] = useState<TState>(() => {
    const stateStr = window.localStorage.getItem(key);
    return stateStr ? (JSON.parse(stateStr) as TState) : newState;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState] as const;
};

export default useLocalStorage;
