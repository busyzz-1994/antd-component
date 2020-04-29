import { useState } from 'react';
type Result<T> = [boolean, (s?: T) => void];
function useToggle<T = boolean>(): Result<T>;
function useToggle<T = boolean>(defaultValue: boolean): Result<T>;
function useToggle<T = string>(
  defaultValue: string,
  reversValue: string
): Result<T>;
function useToggle<T = any>(defaultValue?: any, reversValue?: any): Result<T> {
  if (defaultValue === undefined) {
    defaultValue = false;
  }
  const [status, setStatus] = useState(defaultValue);
  const toggle = (s?: T) => {
    if (s !== undefined) {
      setStatus(s);
    } else {
      if (typeof defaultValue === 'string') {
        let val = status === defaultValue ? reversValue : defaultValue;
        setStatus(val);
      } else {
        setStatus(p => !p);
      }
    }
  };
  return [status, toggle];
}
export default useToggle;
