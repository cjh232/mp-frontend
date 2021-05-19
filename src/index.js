import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"

import "@fontsource/raleway/400.css"
import "@fontsource/open-sans/700.css"
import "@fontsource/archivo/400.css"
import "@fontsource/roboto/400.css"
import "@fontsource/lato/400.css"
import "@fontsource/league-spartan/400.css"
import "@fontsource/overpass/400.css"
import "@fontsource/paytone-one/400.css"

import theme from "./theme"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
