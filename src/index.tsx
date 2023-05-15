import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './styles/main.scss';
import Layout from "../src/components/Layout/Layout";
import { DarkModeProvider } from "./context/DarkModeContext";
import 'font-awesome/css/font-awesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faPhone, faEnvelope, faLinkedin, faGithub);

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <Layout />
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
