import React from 'react';
import { ThemeContext } from './theme-context';

const { Consumer } = ThemeContext;
export const ThemedButton = props => {
  return (
    <Consumer>
      {theme => (
        <button {...props} style={{ color: theme.color }}>
          I am theme based button
        </button>
      )}
    </Consumer>
  );
};
