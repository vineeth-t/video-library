import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import { ThemeContextProvider,StateContextProvider } from './contexts/index';
ReactDOM.render(

  <React.StrictMode>
      <ThemeContextProvider>
       <StateContextProvider>
        <Router>
             <App/>
         </Router> 
        </StateContextProvider>
      </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

