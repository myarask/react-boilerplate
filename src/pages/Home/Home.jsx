import React, { lazy } from 'react';
// import axios from 'axios';
import DeviceSwitch from 'components/DeviceSwitch';

const Desktop = lazy(() => import('./HomeDesktop'));
const Mobile = lazy(() => import('./HomeMobile'));
const Tablet = lazy(() => import('./HomeTablet'));

class Home extends React.Component {
  state = {};

  funcs = {
    setPageState: this.setState.bind(this),
  };

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

export default Home;
