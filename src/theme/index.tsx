import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

import {themes} from './themes';
import {ThemeContextType, ThemeName} from './types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  //@TODO
  //MUST PASS THE DEFAULT THEMENAME FROM ASYNCSTORAGE OR ELSE IT WILL TAKE THE ONE FROM THE SYSTEM
  const [themeName, setThemeName] = useState<ThemeName>('grey');

  const theme = useMemo(() => themes[themeName], [themeName]);

  const toggleTheme = () => {
    //@TODO
    //NEED TO CHANGE THE METHOD HERE TO SUPPORT MORE THEMES
    setThemeName(prevThemeName => (prevThemeName === 'grey' ? 'dark' : 'grey'));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
