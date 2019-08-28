import React from 'react';

const DeviceSwitch = ({ deviceIndex, children, ...rest }) => {
  const arr = React.Children.toArray(children);

  if (deviceIndex >= 0 && deviceIndex <= arr.length) {
    return React.cloneElement(arr[deviceIndex], rest);
  }

  return null;
};

export default DeviceSwitch;
