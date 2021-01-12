import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import theme from './theme';
import { AppProvider } from './context';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppProvider>
      <App />
    </AppProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
