import React, { Suspense } from 'react';
// import axios from 'axios';
import Login from 'pages/Login/Login';
import Home from 'pages/Home/Home';
import Error404 from 'pages/Error404/Error404';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from 'constants/theme';

const getDeviceIndex = () => {
  if (document.documentElement.clientWidth <= 425) return 0;
  if (document.documentElement.clientWidth <= 768) return 1; // Change to 2 to disable the tablet view
  return 2;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      deviceIndex: getDeviceIndex(),
    };

    this.onResize = this.onResize.bind(this);
    this.onResize();

    this.funcs = {
      setAppState: this.setState.bind(this),
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  onResize() {
    const deviceIndex = getDeviceIndex();
    if (deviceIndex !== this.state.deviceIndex) {
      this.setState({ deviceIndex });
    }

    if (deviceIndex === 0) {
      document.body.style.height = `${window.innerHeight}px`;
      document.getElementById('root').style.height = `${window.innerHeight}px`;
    }
  }

  render() {
    const shared = {
      ...this.state,
      ...this.funcs,
    };

    return (
      <MuiThemeProvider theme={theme}>
        <Suspense fallback={<div />}>
          <Router>
            {!this.state.isLoggedIn && <Redirect to="/login" />}
            <Switch>
              <Route exact path="/" render={props => <Home {...props} {...shared} />} />
              <Route exact path="/login" render={props => <Login {...props} {...shared} />} />
              <Route render={() => <Error404 deviceIndex={this.state.deviceIndex} />} />
            </Switch>
          </Router>
        </Suspense>
      </MuiThemeProvider>
    );
  }
}

export default App;