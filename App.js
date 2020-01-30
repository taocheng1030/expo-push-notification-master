import React from 'react';
import { createAppContainer } from 'react-navigation';
import Navigator from './src/Navigator';


class App extends React.Component {
  render() {
    return (
      <Navigator
        onNavigationStateChange={() => ({ /* don't show navigation change logs */ })}
      />
    );
  }
}
//const App = createAppContainer(Navigator);

export default App;
