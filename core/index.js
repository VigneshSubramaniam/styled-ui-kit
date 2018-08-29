import Theme from './components/Theme';
import { configTheme } from './components/Theme/utils';
import { globalConfig } from './components/globals/globalConfig';
import Button from './components/Buttons/Button';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/test/App';
globalConfig();

ReactDOM.render(React.createElement(
  Theme,
  null,
  React.createElement(App, null)
), document.getElementById('root'));

export { configTheme, Theme };
export { globalConfig };
export { Button };