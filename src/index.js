import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore, { history } from './store/configureStore'
import './main.scss';
import main from './pages/main'
const store = configureStore()

render(
  <AppContainer>
    <main.Container store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./pages/main/Container', () => {
    const NewRoot = require('./pages/main/Container').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
