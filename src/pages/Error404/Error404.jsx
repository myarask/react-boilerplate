import React, { lazy } from 'react';
// import axios from 'axios';
import DeviceSwitch from 'components/DeviceSwitch';

const Desktop = lazy(() => import('./Error404Desktop'));
const Mobile = lazy(() => import('./Error404Mobile'));
const Tablet = lazy(() => import('./Error404Tablet'));

const NotFound = props => (
  <DeviceSwitch {...props}>
    <Mobile />
    <Tablet />
    <Desktop />
  </DeviceSwitch>
);

export default NotFound;
