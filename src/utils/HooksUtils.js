import React, { useEffect, useRef } from 'react';

const useDidUpdateEffect = (func, deps) => {
  const didUpdate = useRef(false);

  useEffect(() => {
    if (didUpdate.current) func();
    else didUpdate.current = true;
  }, [func, deps]);
};

export default useDidUpdateEffect;
