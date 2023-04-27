import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import Layout from "../src/components/Layout/Layout"
import { DarkModeProvider } from "./context/DarkModeContext"

ReactDOM.render(
   <React.StrictMode>
      <DarkModeProvider>
         <Layout />
      </DarkModeProvider>
   </React.StrictMode>,
   document.getElementById('root')
);
