import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import RepositoriesLightIcon from '../../assets/icons/RepositoriesLight.svg';

const useStyles = makeStyles(theme => ({
  repositoriesInfoContainer: {
    marginTop: '0.4em'
  },
  repositoryContainer: {
    height: '4em',
    border: '1px solid #DADADA',
    borderRadius: '10px'
  },
  repositoryIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  repositoryTitle: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '18px',
    lineHeight: '21px',
    color: '#1F1F1F'
  },
  repositoryDescription: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '12px',
    lineHeight: '20px',
    color: '#7A7A7A',
    '&:hover': {
      color: '#000000'
    }
  }
}))

function Repositories({ repositories }) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant='h1'>Repositories</Typography>
      <Grid container direction='column' spacing={1} justify='center'
            className={classes.repositoriesInfoContainer}>
        {repositories.map((repository, index) =>
        <Grid item key={index} style={{textDecoration: 'none'}} component='a' href={repository.url}>
          <Grid container direction='row' alignItems='center' className={classes.repositoryContainer}>
            <Grid item xs={3} className={classes.repositoryIconContainer}>
                <img alt='repository icon' src={RepositoriesLightIcon} className={classes.repositoryIcon} />
            </Grid>
            <Grid item xs={9}>
              <Grid container direction='column'>
                <Grid item>
                  <div className={classes.repositoryTitle}>
                    {repository.name}
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.repositoryDescription}>
                    {repository.description}
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </Grid>
        )
        }
      </Grid>
    </div>
  );
}

export default Repositories;
