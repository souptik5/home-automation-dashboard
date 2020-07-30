import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//import components
import Header from "../components/Header";
import Navigation from "../components/Navigation";
//firebase
import firebase from "../firebase";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    // paddingLeft: "1vw",
    // paddingRight: "1vw",
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: "1vh",
    paddingRight: "1vh",
    // backgroundColor: "grey",
    // borderColor: "white",
    "& > *": {
      marginTop: theme.spacing(1),
      width: "100%",
      height: theme.spacing(7),
      backgroundColor: "#2C3335",
      // borderColor: "white",
    },
  },
  Card: {
    display: "flex",
    flexWrap: "wrap",
    // backgroundColor: "grey",
    // borderColor: "white",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(18),
      backgroundColor: "#2C3335",
      // borderColor: "white",
    },
  },
  heading1: {
    fontSize: "3vh",
    flexGrow: 1,
    color: "white",
  },
  phead: {
    fontSize: "3vh",
    flexGrow: 1,
    color: theme.palette.primary.contrastText,
    padding: "1vh",
  },
  bottom: {
    position: "absolute",
    bottom: "0px",
  },
});

class HomeDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch1: false,
      switch2: false,
      switch3: false,
      switch4: false,
      switch5: false,
      switch6: false,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleChange(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
    console.log("Switch State: ", this.state);
    console.log("Switch State Name: ", event.target.name);
    console.log("Switch State Checked: ", event.target.checked);

    // this.handleUpdate(event);
    
    var updates = {};
    // var newRoomKey = firebase.database.ref().child('bedroom').push().key;
    var room1 = "bedroom";
    updates["/" + room1] = this.state;
    return firebase.database.ref().update(updates);
  }

  // handleUpdate(event){
  //   var updates = {};
  //   // var newRoomKey = firebase.database.ref().child('bedroom').push().key;
  //   var room1 = "bedroom";
  //   updates["/" + room1] = this.state;
  //   return firebase.database.ref().update(updates);
  // }

  componentDidMount() {
    const switchRef = firebase.database.ref("bedroom");
    switchRef.on("value", (snapshot) => {
      let switchVals = snapshot.val();
      this.setState({
        switch1: switchVals.switch1,
        switch2: switchVals.switch2,
        switch3: switchVals.switch3,
        switch4: switchVals.switch4,
        switch5: switchVals.switch5,
        switch6: switchVals.switch6,
      });
      console.log(switchVals);
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <div className={classes.paper}>
              <Paper>
                <Typography className={classes.phead}>Bedroom</Typography>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.Card}>
              <Card>
                <CardContent style={{ backgroundColor: "" }}>
                  <Typography variant="h3" className={classes.heading1}>
                    {"Light"}
                  </Typography>
                  <Typography component="div" style={{ color: "white" }}>
                    <Grid
                      component="label"
                      container
                      alignItems="center"
                      spacing={0}
                    >
                      <Grid item>Off</Grid>
                      <Grid item>
                        <Switch
                          checked={this.state.switch1}
                          onChange={this.handleChange}
                          name="switch1"
                          inputProps={{ "aria-label": "primary checkbox" }}
                        />
                      </Grid>
                      <Grid item>On</Grid>
                    </Grid>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.Card}>
              <Card>
                <CardContent style={{ backgroundColor: "" }}>
                  <Typography variant="h3" className={classes.heading1}>
                    {"Fan"}
                  </Typography>
                  <Typography component="div" style={{ color: "white" }}>
                    <Grid
                      component="label"
                      container
                      alignItems="center"
                      spacing={0}
                    >
                      <Grid item>Off</Grid>
                      <Grid item>
                        <Switch
                          checked={this.state.switch2}
                          onChange={this.handleChange}
                          name="switch2"
                          inputProps={{ "aria-label": "primary checkbox" }}
                        />
                      </Grid>
                      <Grid item>On</Grid>
                    </Grid>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.Card}>
              <Card>
                <CardContent style={{ backgroundColor: "" }}>
                  <Typography variant="h3" className={classes.heading1}>
                    {"Port"}
                  </Typography>
                  <Typography component="div" style={{ color: "white" }}>
                    <Grid
                      component="label"
                      container
                      alignItems="center"
                      spacing={0}
                    >
                      <Grid item>Off</Grid>
                      <Grid item>
                        <Switch
                          checked={this.state.switch3}
                          onChange={this.handleChange}
                          name="switch3"
                          inputProps={{ "aria-label": "primary checkbox" }}
                        />
                      </Grid>
                      <Grid item>On</Grid>
                    </Grid>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.Card}>
              <Card>
                <CardContent style={{ backgroundColor: "" }}>
                  <Typography variant="h3" className={classes.heading1}>
                    {"LED"}
                  </Typography>
                  <Typography component="div" style={{ color: "white" }}>
                    <Grid
                      component="label"
                      container
                      alignItems="center"
                      spacing={0}
                    >
                      <Grid item>Off</Grid>
                      <Grid item>
                        <Switch
                          checked={this.state.switch4}
                          onChange={this.handleChange}
                          name="switch4"
                          inputProps={{ "aria-label": "primary checkbox" }}
                        />
                      </Grid>
                      <Grid item>On</Grid>
                    </Grid>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.Card}>
              <Card>
                <CardContent style={{ backgroundColor: "" }}>
                  <Typography variant="h3" className={classes.heading1}>
                    {"Light 2"}
                  </Typography>
                  <Typography component="div" style={{ color: "white" }}>
                    <Grid
                      component="label"
                      container
                      alignItems="center"
                      spacing={0}
                    >
                      <Grid item>Off</Grid>
                      <Grid item>
                        <Switch
                          checked={this.state.switch5}
                          onChange={this.handleChange}
                          name="switch5"
                          inputProps={{ "aria-label": "primary checkbox" }}
                        />
                      </Grid>
                      <Grid item>On</Grid>
                    </Grid>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.Card}>
              <Card>
                <CardContent style={{ backgroundColor: "" }}>
                  <Typography variant="h3" className={classes.heading1}>
                    {"Spot Light"}
                  </Typography>
                  <Typography component="div" style={{ color: "white" }}>
                    <Grid
                      component="label"
                      container
                      alignItems="center"
                      spacing={0}
                    >
                      <Grid item>Off</Grid>
                      <Grid item>
                        <Switch
                          checked={this.state.switch6}
                          onChange={this.handleChange}
                          name="switch6"
                          inputProps={{ "aria-label": "primary checkbox" }}
                        />
                      </Grid>
                      <Grid item>On</Grid>
                    </Grid>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
          <Grid item className={classes.bottom}>
            <Navigation />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(HomeDashboard);
