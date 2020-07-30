import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import components
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    // paddingLeft: "1vw",
    // paddingRight: "1vw",
  },
  heading:{
      color: "white",
      // align:"center",
      fontSize: "10vh",
      padding:"1vh",
      
  },
  heading2:{
    color: "white",
    // align:"center",
    fontSize: "2vh",
    padding:"1vh",
    
},
  bottom: {
    position: "absolute",
    bottom:"0px",
  },
});

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid container style={{backgroundColor: ""}} >
        <div ><Typography className={classes.heading}>Home Automation</Typography><Typography className={classes.heading2}>An app by Souptik Saha</Typography></div>
        </Grid>
        <Grid item className={classes.bottom}>
            <Navigation />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(About);
