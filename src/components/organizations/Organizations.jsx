import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  organizationUrls: {
    marginTop: '0.4em'
  },
  organizationImage: {
    width: '3em',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  }
}))

function Organizations({ organizations }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant='h1'>Organizations</Typography>
      <Grid container direction='row' spacing={1} className={classes.organizationUrls}>
        {
          organizations.map(org =>
            <Grid item key={org.avatarUrl} component='a' href={org.url}>
              <img className={classes.organizationImage} alt='organization' src={org.avatarUrl} />
            </Grid>
          )
        }
      </Grid>
    </React.Fragment>
  )
}

export default Organizations;
