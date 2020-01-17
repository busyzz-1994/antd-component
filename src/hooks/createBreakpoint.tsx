import { useEffect, useState, useMemo } from 'react';

export default (
  breakpoints: { [name: string]: number } = {
    sm: 556,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600
  }
) => () => {
  const [screen, setScreen] = useState(0);
  useEffect(() => {
    const _setScreen = () => {
      let width = window.innerWidth;
      setScreen(width);
    };
    _setScreen();
    window.addEventListener('resize', _setScreen);
    return () => {
      window.removeEventListener('resize', _setScreen);
    };
  }, []);
  let result = useMemo(() => {
    let sortBreakpoints = Object.entries(breakpoints).sort(
      (a, b) => b[1] - a[1]
    );
    let result = '';
    for (let i = 0; i < sortBreakpoints.length; i++) {
      if (screen >= sortBreakpoints[i][1]) {
        result = sortBreakpoints[i][0];
        break;
      }
    }
    return result;
  }, [breakpoints]);
  return result;
};
