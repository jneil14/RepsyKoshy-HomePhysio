import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#ededed",
    height: "auto",
    width: "auto",
    padding: "1rem"
    //     display: "flex-column",
    //     justifyContent: "center",
    //     alignItems: "center",
  },

  homeContainer: {
    width: "auto",
    [theme.breakpoints.down("xs")]: {
      wordWrap: "break-word"
    },

    [theme.breakpoints.up("sm")]: {
      // width: "auto",
      wordWrap: "break-word",
      marginRight: "2rem",
      marginLeft: "2rem",
      padding: 0
    },
    [theme.breakpoints.up("md")]: {
      // width: "auto",
      marginLeft: "15rem",
      marginRight: "15rem",
      padding: "5rem"
    }
  },
  welcomeTextWrapper: {
    width: "75vw",
    wordWrap: "break-word"
  },
  //   welcomeTextWrapper: {
  //     [theme.breakpoints.down("xs")]: {
  //     //   maxWidth: "15rem",
  //       width: "auto",
  //       wordWrap: "break-word",
  //     }
  //   },
  welcomeText: {
    wordWrap: "break-word",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "flex-start",
      fontWeight: "bold",
      marginBottom: "1rem",
      marginTop: "1rem",
      wordWrap: "break-word"
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "1rem",
      marginBottom: "1rem",

      display: "flex",
      justifyContent: "center"
    },
    [theme.breakpoints.up("md")]: {
      width: "auto",
      display: "flex",
      justifyContent: "center"
    }
  },
  welcomeTextRepsy: {
    wordWrap: "break-word",
    [theme.breakpoints.down("xs")]: {
      color: theme.palette.secondary.main,
      fontFamily: "Pacifico"
    },
    [theme.breakpoints.up("sm")]: {
      color: theme.palette.secondary.main,
      fontFamily: "Pacifico",
      lineHeight: "3rem",
      fontSize: "2.5rem"
    },
    [theme.breakpoints.up("md")]: {
      color: theme.palette.secondary.main,
      fontFamily: "Pacifico",
      lineHeight: "4rem",
      fontSize: "3.5rem"
    }
  },
  welcomeTextKoshy: {
    wordWrap: "break-word",
    [theme.breakpoints.down("xs")]: {
      color: theme.palette.primary.main,
      fontFamily: "Pacifico"
    },
    [theme.breakpoints.up("sm")]: {
      color: theme.palette.primary.main,
      fontFamily: "Pacifico",
      lineHeight: "3rem",
      fontSize: "2.5rem"
    },
    [theme.breakpoints.up("md")]: {
      color: theme.palette.primary.main,
      fontFamily: "Pacifico",
      lineHeight: "4rem",
      fontSize: "3.5rem"
    }
  },

  welcomeText: {
    color: [theme.palette.secondary.main],
    display: "flex",
    flexGrow: 1
  },
  // welcomeSubText: {
  //   color: [theme.palette.primary.main]
  // },

  welcomeParagraph: {
    [theme.breakpoints.down("xs")]: {
      padding: "1rem"
      //   lineHeight: "1.5rem",
      //   fontSize: "1rem"
    },
    [theme.breakpoints.up("sm")]: {
      margin: "1rem"
      //   lineHeight: "2rem",
      //   fontSize: "1rem"
    },
    [theme.breakpoints.up("md")]: {
      margin: "1rem",
      paddingTop: "3rem"
      //   lineHeight: "3rem",
      //   fontSize: "2rem"
    }
  },

  howItWorksText: {
    color: theme.palette.primary.dark,
    display: "flex",
    flexGrow: 1,
    textDecoration: "underline",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
      // display: "flex",
      // justifyContent: "flex-start",
      // textDecoration: "underline"
    },
    [theme.breakpoints.up("sm")]: {
      // display: "flex",
      // justifyContent: "flex-start",
      // textDecoration: "underline",
      margin: "1rem",
      // color: theme.palette.secondary.main
    },

    [theme.breakpoints.up("md")]: {
      textDecoration: "underline",
      // color: theme.palette.secondary.main,
      paddingTop: "3rem"
    }
  },
  howItWorksPara: {
    [theme.breakpoints.down("xs")]: {
      wordWrap: "break-word",
      padding: "1rem"
    },
    [theme.breakpoints.up("sm")]: {
      padding: "1rem"
    },
    [theme.breakpoints.up("md")]: {
      padding: "1rem",
      paddingRight: 0
    }
  },

  listContainer: {
    backgroundColor: theme.palette.primary.dark,
    opacity: "93%",
    width: "auto",
    borderRadius: "10px",

    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
      marginTop: "1rem",
      marginBottom: "1rem"
    },
    [theme.breakpoints.up("sm")]: {
      padding: "1.5rem",
      //   marginTop: "3rem",
      //   marginBottom: "3rem",
      margin: "3rem",
      boxShadow: "15px 15px #349fda"
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      //   marginTop: "5rem",
      //   marginBottom: "5rem",
      margin: "10rem",
      boxShadow: "25px 25px #349fda"
    }
  },
  listTitle: {
    color: theme.palette.secondary.main,
    textDecoration: "underline",
    paddingTop: "1rem"
  },

  servicesItemsContainer: {},

  servicesItems: {
    color: "white"
  },
  servicesItem: {
    padding: "1rem"
  }
}));

let services = [
  "Physiotherapy for Back and Neck Pain",
  "Ergonomics and Management of Work-related Musculoskeletal Injuries",
  "Foot and Ankle Rehabilitation",
  "Orthopedic Rehabilitation (e.g. Hip Fracture, Osteoarthritis, Total Knee Replacement, etc)",
  "Pain Management",
  "Sport Injury Management / Musculoskeletal Injuries",
  "Upper Limbs Physiotherapy",
  "Neurological Rehabilitation (e.g. Stroke, Parkinson’s Disease, Traumatic Brain Injury, etc)",
  "Vestibular Rehabilitation",
  "Caregiver training and education"
];

function Home() {
  const classes = useStyles();
  const theme = useTheme();

  let service = services.map((item, index) => {
    return (
      <li key={index} className={classes.servicesItem}>
        {item}
      </li>
    );
  });

  return (
    <>
      <Hero />

      <div className={classes.root}>
        <Container className={classes.homeContainer}>
          <div className={classes.welcomeTextWrapper}>
            {/* <Typography variant="h1" className={classes.welcomeText}>
              Welcome to &nbsp;
              <span className={classes.welcomeTextRepsy}> Repsy </span> &nbsp;
              <span className={classes.welcomeTextKoshy}> Koshy </span> &nbsp;
              Clinic
            </Typography> */}
            <Typography variant="h1" className={classes.welcomeText}>
              WELCOME!
            </Typography>
            {/* <Typography variant="h2" className={classes.welcomeSubText}>
              (LET THE HEALING BEGIN)
            </Typography> */}
          </div>
          <Typography className={classes.welcomeParagraph} variant="body1">
            Physiotherapy is a healthcare profession which provides therapy
            services to people I order to develop, maintain, or restore physical
            and functional ability resulting from injury, disease or ageing. The
            main objectives are to relieve pain, maximize mobility and regain
            flexibility, strength and also maximize functional ability which
            will enhance the patient’s quality of life and community
            integration.
          </Typography>

          {/* How it works section below */}
          <Typography variant="h2" className={classes.howItWorksText}>
            HOW IT WORKS
          </Typography>
          <Typography className={classes.howItWorksPara} variant="body1">
            Physiotherapy treatment within the comfort of your home. Our
            physiotherapist or occupational therapist will come to your place
            where you reside to assess your movement and function within your
            environment. We will see what problems you are facing and how our
            treatment can help you to function and move better. Patients with
            reduced activity tolerance, lack of energy due to age, neurological
            conditions, recent surgery or hospitalization, benefit from our
            in-home therapy. We acknowledge that rehabilitation is an active and
            dynamic process in which patient and family have a vital role. We
            put our patient first in everything we do. We work together with the
            patient and their caregivers to set realistic goals and address the
            needs of their caregivers.
          </Typography>
        </Container>

        <div className={classes.listContainer}>
          <Typography variant="h2" className={classes.listTitle}>
            SERVICES AVAILABLE
          </Typography>
          <div className={classes.servicesItemsContainer}>
            <ol className={classes.servicesItems}>
              <Typography variant="body1"> {service} </Typography>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
