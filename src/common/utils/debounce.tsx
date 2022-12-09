export const debounce = (func: Function) => {
  let timer: NodeJS.Timeout | null;

  return function (this: any, ...args: Array<any>) {
    const context = this as any;
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, 500);
  };
};
