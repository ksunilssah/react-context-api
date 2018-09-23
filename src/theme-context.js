import React from 'react';
export const themes = {
  light: {
    color: '#000',
    background: '#eee'
  },
  dark: {
    color: '#ffcc00',
    background: '#222'
  }
};

export const ThemeContext = React.createContext(
  themes.dark //Default value
);
