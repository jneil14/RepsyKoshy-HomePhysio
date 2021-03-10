import React from "react";
import ReactDOM, { hydrate, render } from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import Theme from './components/Theme';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from "@material-ui/core/CssBaseline";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  <CssBaseline />
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

reportWebVitals();
