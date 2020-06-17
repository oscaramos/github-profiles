import React from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    }
  },
})(TextField);

const useStyles = makeStyles(theme => ({
  usernameContainer: {
    paddingTop: theme.spacing(16)
  },
  submit: {
    border: '2px solid #23292D',
    borderRadius: '30px',
    marginTop: '0.8em',
    width: '8em'
  },
}))

const InputUsername = ({ error, setUsername, handleSearch }) => {
  const classes = useStyles();

  return (
    <Grid container direction='column' align='center' className={classes.usernameContainer}>
      <Grid item>
        <CssTextField error={error} label='Username' onChange={e => {setUsername(e.target.value)}}/>
      </Grid>
      <Grid item>
        <Button className={classes.submit} onClick={handleSearch}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default InputUsername;
