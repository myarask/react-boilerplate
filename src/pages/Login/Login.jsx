import React, { lazy } from 'react';
// import axios from 'axios';
import DeviceSwitch from 'components/DeviceSwitch';

const Desktop = lazy(() => import('./LoginDesktop'));
const Mobile = lazy(() => import('./LoginMobile'));
const Tablet = lazy(() => import('./LoginTablet'));

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };

  funcs = {
    setPageState: this.setState.bind(this),
    onLogin: this.onLogin.bind(this),
    onChange: this.onChange.bind(this),
  };

  onLogin() {
    this.props.setAppState({ isLoggedIn: true }, () => this.props.history.push('/'));
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <DeviceSwitch {...this.props} {...this.state} {...this.funcs}>
        <Mobile />
        <Tablet />
        <Desktop />
      </DeviceSwitch>
    );
  }
}

export default Login;
