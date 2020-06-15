import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  aboutText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '300',
    letterSpacing: '0.01em',
    color: '#7A7A7A',

    paddingTop: '0.4em'
  }
}))

function About({ description }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant='h1'>About</Typography>
      <div className={classes.aboutText}>
        {description}
      </div>
    </React.Fragment>
  );
}

export default About;
