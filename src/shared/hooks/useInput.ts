import React, { useCallback, useState } from 'react';

const useInput = () => {
  const [state, setState] = useState<string>('');
  const onChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLTextAreaElement>|string,
  ) => {
    const value: string = typeof e !== 'string'
      ? e.target.value
      : e;
    setState(value);
  }, []);

  return [state, onChange] as const;
};

export default useInput;
