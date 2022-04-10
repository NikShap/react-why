import { createContext, useContext, useState, useRef, useCallback } from 'react';
import { ThemeContextType } from '../../types';

const initialValue: ThemeContextType = {
  isDark: false,
  switchTheme: () => null,
}

const ThemeContext = createContext<ThemeContextType>(initialValue);

export const ThemeContextProvider = ThemeContext.Provider;

export const useTheme = () => useContext(ThemeContext);

export const useThemeContextCreator = (defaultValue: boolean = false): ThemeContextType => {
  const [isDark, setIsDark] = useState(defaultValue);

  const { current: switchTheme } = useRef(
    () => setIsDark(prev => !prev)
  );

  // const switchTheme = useCallback(
  //   () => setIsDark(prev => !prev), 
  //   []
  // );

  return {
    isDark,
    switchTheme
  };
}