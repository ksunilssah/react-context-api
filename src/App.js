import React, { Component, Fragment } from 'react';
import { ThemeContext, Themes } from './theme-context';
import { ThemedButton } from './ThemedButton';
import './App.css';
const { Provider, Consumer } = React.createContext({
  firstName: 'Sunil',
  lastName: 'Sah',
  age: 33
});
const initialData = {
  firstName: 'test',
  lastName: 'test1',
  age: 33
};
class App extends Component {
  render() {
    return (
      <Fragment>
        <ThemedButton />
        <Provider value={initialData}>
          <Toolbar />
        </Provider>
      </Fragment>
    );
  }
}

function Toolbar() {
  return <ThemeButton />;
}

function ThemeButton() {
  return <Button />;
}

function Button(props) {
  return (
    <Consumer>
      {theme => (
        <button>
          Theme name
          {theme.firstName}
        </button>
      )}
    </Consumer>
  );
}

export default App;
