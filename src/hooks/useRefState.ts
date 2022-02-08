import { useState, useRef, useCallback } from 'react';

export default function useRefState(initialState: unknown) {
  const ins = useRef();

  const [state, setState] = useState(() => {
    // 初始化
    const value =
      typeof initialState === 'function' ? initialState() : initialState;
    ins.current = value;
    return value;
  });

  const setValue = useCallback((value) => {
    if (typeof value === 'function') {
      setState((prevState: unknown) => {
        const finalValue = value(prevState);
        ins.current = finalValue;
        return finalValue;
      });
    } else {
      ins.current = value;
      setState(value);
    }
  }, []);

  return [state, setValue, ins];
}
