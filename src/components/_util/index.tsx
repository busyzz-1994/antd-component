export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export const tuple = <T extends string[]>(...args: T) => args;
export const tuple_num = <T extends number[]>(...args: T) => args;
export const getPrefix = type => {
  return 'busyzz-' + type;
};
