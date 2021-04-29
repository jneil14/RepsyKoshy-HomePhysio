import React from 'react';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";



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
  },
  // typography: {
  //   fontFamily: [
  //     'Oxygen',
  //     'sans-serif'
  //   ].join(',')
  // }
  typography: {
    fontFamily: "Arvo"
  }
});

theme.typography.body1 = {
  fontFamily: "Arvo",
  lineHeight: "1.5rem",
  fontSize: "1rem",
  textAlign: "justify",
  
  [theme.breakpoints.up("sm")]: {
    lineHeight: "2rem",
    fontSize: "1rem",
    textAlign: "justify"
  },
  [theme.breakpoints.up("md")]: {
    lineHeight: "3rem",
    fontSize: "2rem",
    textAlign: "justify"
  }
};

theme.typography.body2 = {
  fontFamily: "Arvo",
  lineHeight: "1.25rem",
  fontSize: "1rem",
  textAlign: "justify",

  [theme.breakpoints.up("sm")]: {
    lineHeight: "1.5rem",
    fontSize: "1rem",
    
  },
  [theme.breakpoints.up("md")]: {
    lineHeight: "2.5rem",
    fontSize: "2rem",
    // textAlign: "justify"
  }
};


theme.typography.h1 = {
  fontFamily: "Arvo",
  lineHeight: "1.5rem",
  fontSize: "1.5rem",

  [theme.breakpoints.up("sm")]: {
    lineHeight: "3rem",
    fontSize: "2.5rem"
  },
  [theme.breakpoints.up("md")]: {
    lineHeight: "5rem",
    fontSize: "4.5rem"
  }
};

theme.typography.h2 = {
  fontFamily: "Arvo",
  lineHeight: "1rem",
  fontSize: "1rem",

  [theme.breakpoints.up("sm")]: {
    lineHeight: "2.5rem",
    fontSize: "2rem"
  },
  [theme.breakpoints.up("md")]: {
    lineHeight: "4rem",
    fontSize: "3rem"
  }
};




export default theme;
