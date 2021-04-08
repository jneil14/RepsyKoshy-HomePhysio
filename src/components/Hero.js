import React from 'react';
import { Container, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import heroImage from '../assets/training.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    // backgroundImage: `url(${process.env.PUBLIC_URL + "/asset/training.jpg"})`,
    backgroundImage: `url(${heroImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },

  heroContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "flex-end",
      wordWrap: "break-word",
      height: "50vh"
    },
    [theme.breakpoints.up("sm")]: {
      height: "90vh",
      display: "flex",
      justifyContent: "flex-start",
      paddingTop: "3rem",
      paddingLeft: "3rem"
      // wordWrap: "break-word",
    }
  },

  heroText: {
    [theme.breakpoints.down("xs")]: {
      fontFamily: "Pacifico",
      color: "white",
      textShadow: "3px 3px #349fda",
      lineHeight: "2rem",
      fontSize: "1.5rem"
    },

    [theme.breakpoints.up("sm")]: {
      fontFamily: "Pacifico",
      color: "white",
      textShadow: "5px 5px #349fda",
      lineHeight: "4rem",
      fontSize: "2.5rem"
    }
  },

  heroTextContainer: {
    [theme.breakpoints.down("xs")]: {
      // display: "flex",
      // justifyContent: "flex-end",
      // wordWrap: "break-word",
      height: "3rem",
      width: "10rem",
      paddingTop: "4rem"
    },
    [theme.breakpoints.up("sm")]: {
      width: "auto",
      height: "auto",
      paddingTop: "2rem"
      // width: "20rem"
    }
  }
}));






function Hero() {


    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));


    return (
      <div className={classes.root} >
        {isMobile ? (
          <>
            <div className={classes.heroContainer}>
              <div className={classes.heroTextContainer}>
                <Typography className={classes.heroText}>
                  Strive for greatness...
                </Typography>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={classes.heroContainer}>
              <div className={classes.heroTextContainer}>
                <Typography className={classes.heroText}>
                  Not Mobile Format
                </Typography>
              </div>
            </div>
          </>
        )}
      </div>
    );
}

export default Hero;
