import { useCallback, useState } from 'react';

const useForceRender = () => {
  const [state, setState] = useState<number>();

  const forceRender = useCallback(() => {
    setState(Date.now());
  }, []);

  return forceRender;
};

export default useForceRender
