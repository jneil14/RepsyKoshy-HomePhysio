import React from "react";
import { Helmet } from "react-helmet";
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import Theme from './components/Theme';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Homie from './components/Homie';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
import CssBaseline from "@material-ui/core/CssBaseline";

import './App.css';



const useStyles = makeStyles({});



function App() {

  const classes = useStyles();


  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>HomePhysio</title>
        <meta
          name="description"
          content="Physiotherapy services right in your door step."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Helmet>
      {/* end of meta tags */}

      {/* Components start here */}

        
      <ThemeProvider theme={Theme}>
        <div className={classes.container}>
          <Router>
            <Navigation />
            <Switch>
              <Route exact from="/" render={props => <Home {...props} />} />
              <Route
                exact
                path="/about"
                render={props => <About {...props} />}
              />
              <Route
                exact
                path="/contact"
                render={props => <Contact {...props} />}
              />
              <Route
                exact
                path="/services"
                render={props => <Services {...props} />}
              />
            </Switch>
            <Footer />
          </Router>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
