import React from 'react';
import { Container, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import heroImage from '../assets/training.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    boxSizing: "border-box",
    width: "100vw",
    // margin: 0,
    // padding: 0
  },

  heroContainer: {
    width: "100vw",
    margin: 0,
    padding: 0
  },

  heroImage: {
    width: "100%",
    height: "20rem"
  }
}));






function Hero() {


    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));


    return (
      <div className={classes.root}>
        {isMobile ? (
          <>
            <Container className={classes.heroContainer} maxWidth="false">
              <img
                className={classes.heroImage}
                src={heroImage}
                alt="Banner Image"
              />
            </Container>
          </>
        ) : (
          <>
            <Typography variant="h1">
              Not Mobile Format
              <img
                className={classes.heroImage}
                src={heroImage}
                alt="Banner Image"
              />
            </Typography>
          </>
        )}
      </div>
    );
}

export default Hero;
