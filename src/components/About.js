import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#ededed",
    margin: 0,
    boxSizing: "border-box"
  },
  aboutIntro: {
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      padding: "1.5rem"
    },
    [theme.breakpoints.up("sm")]: {
      padding: "2rem"
    },
    [theme.breakpoints.up("md")]: {
      padding: "5rem"
    }
  },
  aboutTitle: {
    fontFamily: "Pacifico",
    display: "flex",
    flexGrow: 1,
    color: [theme.palette.primary.light],
    outline: [theme.palette.primary.dark],
    textShadow: "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1rem"
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: "3rem"
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: "5rem"
    }
  },
  aboutPara: {
    width: "auto",
    marginLeft: "1rem",
    marginRight: "1rem"
  },
  statementsWrapper: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      padding: "2rem"
    }
  },
  missionWrapper: {
    [theme.breakpoints.down("xs")]: {
      margin: "1.5rem"
    },
    [theme.breakpoints.up("sm")]: {
      margin: "3rem"
    },
    [theme.breakpoints.up("md")]: {
      width: "50vw"
    }
  },
  missionTitle: {
    width: "auto",
    paddingBottom: ".3rem",
    borderBottom: "2px solid #001540",
    display: "inline",
    color: "#f44336",
    fontFamily: "Pacifico",
    textShadow: "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
    [theme.breakpoints.up("md")]: {
      borderBottom: "5px solid #001540",
      textShadow: "0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black"
    }
  },
  missionPara: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: "1rem"
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "2.5rem"
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "3rem"
    }
  },

  visionWrapper: {
    [theme.breakpoints.down("xs")]: {
      margin: "1.5rem"
    },
    [theme.breakpoints.up("sm")]: {
      margin: "3rem"
    },
    [theme.breakpoints.up("md")]: {
      width: "50vw"
    }
  },
  visionTitle: {
    width: "auto",
    paddingBottom: ".3rem",
    borderBottom: "2px solid #001540",
    display: "inline",
    color: "#0288d1",
    fontFamily: "Pacifico",
    textShadow: "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
    [theme.breakpoints.up("md")]: {
      borderBottom: "5px solid #001540",
      textShadow: "0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black"
    }
  },
  visionPara: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: "1rem"
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "2.5rem"
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "3rem"
    }
  },

  valuesWrapper: {
    display: "flex-column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "2rem",
    [theme.breakpoints.down("xs")]: {
      margin: "1.5rem"
    },
    [theme.breakpoints.up("sm")]: {
      margin: "3rem",
      paddingBottom: "3rem"
    },
    [theme.breakpoints.up("md")]: {
      padding: "5rem"
    }
  },
  valuesTitle: {
    paddingBottom: ".3rem",
    borderBottom: "2px solid #001540",
    display: "inline",
    color: "#0288d1",
    fontFamily: "Pacifico",
    textShadow: "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
    [theme.breakpoints.up("md")]: {
      borderBottom: "5px solid #001540",
      textShadow: "0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black"
    }
  },

  valuesItemsWrapper: {
    padding: 0,
    display: "flex-column",
    justifyContent: "center",
    alignItems: "center",
    listStyle: "none"
  },
  valueItem: {
    listStyle: "none"
  },

  valueName: {
    display: "block",
    color: theme.palette.secondary.main,
    paddingTop: "1rem",
    paddingBottom: ".5rem",
    [theme.breakpoints.up("sm")]: {
      padding: "1rem"
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexGrow: 1,
      padding: "2.5rem"
    }
  },
  valuePara: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "5.5rem"
    }
  }
}));

const values = {
  Compassion:
    "We show care and concern for the health of the community, especially for the sick and needy.",
  Respect: "We treat everyone with dignity, fairness and professionalism.",
  Excellence: "We pursue the highest standard of clinical and service quality.",
  Accountability:
    "We act with integrity and responsibility in delivering our commitments.",
  Teamwork:
    "We foster camaraderie and solidarity amongst our staff and also our partners.",
  Empowerment:
    "We support, trust and empower employees to further the shared mission of promoting lifelong health. We are committed to developing the confidence of every employee’s individual talents and capabilities."
};

function About() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <div className={classes.aboutIntro}>
        <Typography variant="h1" className={classes.aboutTitle}>
          Who we are...
        </Typography>
        <Typography variant="body1" className={classes.aboutPara}>
          Homecare was conceived with goals to improve the quality of life for
          the needy and physically challenged. We also provide basic support and
          training to caregivers. Our Homecare service complements and supports
          early discharged patients from hospitals who need Physiotherapy
          services at their doorstep. It also facilitates step-down care to
          institutions with the aim of reducing the re-admission possibility of
          these discharged patients while maximizing their physical and
          physiological recovery.
        </Typography>
      </div>

      <div className={classes.statementsWrapper}>
        <div className={classes.missionWrapper}>
          <Typography variant="h2" className={classes.missionTitle}>
            OUR MISSION
          </Typography>
          <Typography variant="body1" className={classes.missionPara}>
            Promoting lifelong health, serving the community. Restore hope and
            function through patient-focused rehabilitation.
          </Typography>
        </div>

        <div className={classes.visionWrapper}>
          <Typography variant="h2" className={classes.visionTitle}>
            OUR VISION
          </Typography>
          <Typography variant="body1" className={classes.visionPara}>
            To be the leading charity for the advancement of lifelong health in
            the community. To provide the highest quality of home-based
            rehabilitation services.
          </Typography>
        </div>
      </div>

      <div className={classes.valuesWrapper}>
        <Typography variant="h2" className={classes.valuesTitle}>
          OUR VALUES
        </Typography>
        <ul className={classes.valuesItemsWrapper}>
          {Object.entries(values).map(([key, value]) => {
            return (
              <>
                <li className={classes.valueItem}>
                  <Typography variant="h2" className={classes.valueName}>
                    {key}
                  </Typography>

                  <Typography variant="body2" className={classes.valuePara}>
                    {value}
                  </Typography>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default About;
