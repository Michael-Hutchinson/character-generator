import React from 'react';
import ReactDOM from 'react-dom';
import CharacterIdProvider from 'utils/Context';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CharacterIdProvider>
      <App />
    </CharacterIdProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
