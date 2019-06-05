import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LoginForm from 'components/LoginForm';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
  },
}));

const LoginTablet = props => {
  const classes = useStyles();

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        background: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper className={classes.paper}>
        <LoginForm {...props} />
      </Paper>
    </div>
  );
};

export default LoginTablet;
