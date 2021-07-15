const useDebounce = (fn: Function, timeout = 500) => {
  let timer: any;

  return (...args: any) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };
};

export default useDebounce;
