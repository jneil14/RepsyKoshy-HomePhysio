import React from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Navigation from './Navigation';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0288d1",
      //   main: "#015f92",
      light: "#349fda",
      dark: "#001540"
      //   light: "#14ccdc",
      //   dark: "#031831"
    },
    secondary: {
      main: "#f44336",
      light: "#f6685e",
      dark: "#aa2e25"
    }
    // secondary: {
    //   main: "#4caf50",
    //   light: "#6fbf73",
    //   dark: "#357a38"
    // }
  },
  overrides: {
    padding: {
      ".MuiList-padding": {
        padding: 0
      }
    }
  }
});



export default theme;
