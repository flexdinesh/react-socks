import React from 'react';
import ReactDOM from 'react-dom';

import Example from './Example';
import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Example);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Example', () => {
    render(Example)
  });
}
