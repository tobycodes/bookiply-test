import { useCallback, useRef } from "react";

export const DEFAULT_DEBOUNCE_TIMEOUT = 500;

/** Returns a debounced version of the function parameter passed in.
 * @param {Function} fn Function to be debounced.
 * @param {number} timeout Debounce timeout (in milliseconds).
 */
const useDebounce = (fn: Function, timeout = DEFAULT_DEBOUNCE_TIMEOUT) => {
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
