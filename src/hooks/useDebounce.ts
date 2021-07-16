import { useCallback, useRef } from "react";

const useDebounce = (fn: Function, timeout = 500) => {
  const timerRef = useRef<any>();

  const debounced = useCallback(
    (...args: any) => {
      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        fn.apply(this, args);
      }, timeout);
    },
    [fn, timeout]
  );

  return debounced;
};

export default useDebounce;
