import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoginForm from 'components/LoginForm';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const LoginTablet = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LoginForm {...props} />
    </div>
  );
};

export default LoginTablet;
