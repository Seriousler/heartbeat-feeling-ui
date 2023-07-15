// 节流函数
export const throttle = <T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void => {
  let lastTime = 0;
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (...args: Parameters<T>): void {
    const now = Date.now();
    if (now - lastTime < delay) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        lastTime = now;
        fn.apply(this, args);
      }, delay - (now - lastTime));
    } else {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

// 防抖函数
export const debounce = <T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void => {
  let timer: ReturnType<typeof setTimeout> | null = null;
return function (...args: Parameters<T>): void {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    fn.apply(this, args);
  }, delay);
};
}
