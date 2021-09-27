import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import { ThemeContextProvider,LibraryContextProvider } from './contexts/index';
ReactDOM.render(
  <React.StrictMode>
    <LibraryContextProvider>
      <ThemeContextProvider>
        <Router>
             <App/>
         </Router>
        
      </ThemeContextProvider>
      </LibraryContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

