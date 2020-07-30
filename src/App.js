import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//import material-ui
import theme from '../src/utils/theme';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
//import views
import HomeDashboard from './views/HomeDashboard';
import About from './views/About';
//import react-router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import constants
import {NAME} from '../src/utils/constants';


const styles = (theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      height: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#6D7183',
      outline: '1px solid slategrey',
    },
  },
  mainBackground: {
    background: theme.palette.primary.background,
    height: '100vh',
    width: '100vw',
    // overflow: 'hidden',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
});
class App extends Component {
  render() {
    console.log('theme', theme);
    const { classes, user } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
      <div className={classes.mainBackground}>
        <Router basename={`/${NAME}`}>
          <Switch>
            <Route exact path="/home-dashboard" component={HomeDashboard} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
