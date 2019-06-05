import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const LoginForm = props => {
  const classes = useStyles();

  return (
    <form onSubmit={props.onLogin}>
      <TextField
        required
        fullWidth
        label="Username"
        name="username"
        value={props.username}
        onChange={props.onChange}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        required
        fullWidth
        label="Password"
        type="password"
        autoComplete="current-password"
        name="password"
        value={props.password}
        onChange={props.onChange}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" color="primary" className={classes.button} type="submit">
        Log In
      </Button>
    </form>
  );
};

export default LoginForm;
