export const throttle = <T extends (...args: any[]) => void>(
  callback: T,
  time: number
): ((...args: Parameters<T>) => void) => {
  let isWaiting = false;

  return (...args: Parameters<T>) => {
    if (isWaiting) return;
    isWaiting = true;
    callback(...args);

    setTimeout(() => {
      isWaiting = false;
    }, time);
  };
};
