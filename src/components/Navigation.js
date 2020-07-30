import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
// import Grid from "@material-ui/core/Grid";
import { Redirect, NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    // backgroundColor: "#008394",
  },
});

export default function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <NavLink to="/home-dashboard">
          <BottomNavigationAction
            label="Dashboard"
            icon={<HomeRoundedIcon />}
          />
        </NavLink>
        <NavLink to="/about">
          <BottomNavigationAction label="About" icon={<InfoRoundedIcon />} />
        </NavLink>
      </BottomNavigation>
    </div>
  );
}
