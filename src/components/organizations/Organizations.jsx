import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  organizationUrls: {
    marginTop: '0.4em'
  },
  organizationImage: {
    width: '3em'
  }
}))

function Organizations({ orgImageUrls }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant='h1'>Organizations</Typography>
      <Grid container direction='row' spacing={1} className={classes.organizationUrls}>
        {
          orgImageUrls.map(url =>
            <Grid item>
              <img className={classes.organizationImage} alt='organization' src={url} />
            </Grid>
          )
        }
      </Grid>
    </React.Fragment>
  )
}

export default Organizations;
