import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import { ThemeContextProvider } from './contexts/themeContext';
ReactDOM.render(
  <React.StrictMode>
      <ThemeContextProvider>
        <Router>
             <App/>
         </Router>
      </ThemeContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

