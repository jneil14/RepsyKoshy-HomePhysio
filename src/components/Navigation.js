import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Logo from '../assets/logo.png';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SortIcon from "@material-ui/icons/Sort";
import Button from "@material-ui/core/Button";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router";



const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,

    // backgroundColor: "#015f92"
  },
  menuButton: {
    // margin: theme.spacing(2)
  },
  navHeaderContainer: {
    // width: "100vw",
    backgroundColor: theme.palette.primary.dark
  },

  // Mobile
  brandLogoMobile: {
    [theme.breakpoints.down("xs")]: {
      // flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      borderRadius: "100%",
      margin: "0.5rem",
      backgroundColor: "white",
      height: "5rem",
      width: "5rem"
    }
  },

  hamburgerIcon: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "2rem",
    padding: 0
  },

  navItemsMobile: {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    "&:hover": {
      color: "#14ccdc"
    }
  },

  // Non-mobile
  brandLogo: {
    [theme.breakpoints.up("sm")]: {
      // flexGrow: 1,
      display: "flex",
      // justifyContent: "center",
      margin: "10px auto",
      backgroundColor: "white",
      borderRadius: "100%",
      height: "4rem",
      width: "4rem"
    },
    [theme.breakpoints.up("md")]: {
      borderRadius: "100%",
      margin: "1rem",
      backgroundColor: "white",
      height: "7rem",
      width: "7rem"
    }
  },

  navHeader: {
    display: "flex",
    paddingRight: 0,
    margin: "0 auto",
    justifyContent: "space-between",
    fontSize: "1rem"
  },

  navItemsContainer: {
    marginRight: "1rem",
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: theme.palette.primary.dark
  },

  navItemsStyle: {
    [theme.breakpoints.up("sm")]: {
      margin: "0, auto",
      fontSize: "1rem",
      lineHeight: "1rem",
      color: "white",
      // ...theme.typography.button,
      backgroundColor: theme.palette.primary.dark,
      // ...theme.typography.button,
      transition: "0.3s",
      "&:hover": {
        borderBottom: "5px solid #f6685e",
        padding: 0
      }
    },
    [theme.breakpoints.up("md")]: {
      margin: "2rem",
      fontSize: "1.5rem",
      lineHeight: "1.5rem"
    }
  }
}));


const Navigation = props => {
  const { history } = props;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleNavItemClick = pageURL => {
    history.push(pageURL);
  };

  const navItems = [
    {
      navTitle: "HOME",
      pageURL: "/",
      itemIcon: <HomeRoundedIcon />
    },
    {
      navTitle: "ABOUT",
      pageURL: "/about",
      itemIcon: <InfoOutlinedIcon />
    },
    {
      navTitle: "SERVICES",
      pageURL: "/services",
      itemIcon: <FitnessCenterIcon />
    },
    {
      navTitle: "CONTACT",
      pageURL: "/contact",
      itemIcon: <ContactPhoneIcon />
    }
  ];

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <div className={classes.navHeaderContainer}>
          <Toolbar className={classes.navHeader}>
            {/* <div>
              <img className={classes.brandLogoMobile} src={Logo} />
            </div> */}

            {isMobile ? (
              <>
                <div>
                  <img className={classes.brandLogoMobile} src={Logo} />
                </div>
                <IconButton
                  style={{padding: 0}}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <SortIcon className={classes.hamburgerIcon} />
                </IconButton>
                <Menu
                  MenuListProps={{ disablePadding: true }}
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {navItems.map(navItem => {
                    const { navTitle, pageURL } = navItem;
                    return (
                      <MenuItem
                        className={classes.navItemsMobile}
                        onClick={() => handleMenuClick(pageURL)}
                      >
                        {navTitle}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </>
            ) : (
              <>
                <div>
                  <img className={classes.brandLogo} src={Logo} />
                </div>
                <div className={classes.navItemsContainer}>
                  {navItems.map(navItem => {
                    const { navTitle, pageURL, itemIcon } = navItem;
                    return (
                      <Button
                        variant="text"
                        onClick={() => handleNavItemClick(pageURL)}
                        startIcon={itemIcon}
                        className={classes.navItemsStyle}
                      >
                        {navTitle}
                      </Button>
                    );
                  })}
                </div>
              </>
            )}
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
};

export default withRouter(Navigation);
// export default Navigation;
