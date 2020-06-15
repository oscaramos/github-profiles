import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import RepositoriesLightIcon from '../../assets/icons/RepositoriesLight.svg';

const useStyles = makeStyles(theme => ({
  repositoryContainer: {
    height: '4em',
    width: '18em',
    border: '1px solid #DADADA',
    borderRadius: '10px'
  },
  repositoryIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  repositoryTitle: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '18px',
    lineHeight: '21px',
    color: '#1F1F1F'
  },
  repositoryDescriptionFocused: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '12px',
    lineHeight: '20px',
    color: '#1F1F1F'
  },
  repositoryDescription: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '12px',
    lineHeight: '20px',
    color: '#7A7A7A'
  }
}))

function Repositories({ repositoriesInfo, focused }) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant='h1'>Popular Repositories</Typography>
      <Grid container direction='column' spacing={1}>
        {repositoriesInfo.map((repository, index) =>
          <Grid item>
            <Grid container direction='row' alignItems='center' className={classes.repositoryContainer}>
              <Grid item xs={3} className={classes.repositoryIconContainer}>
                <img alt='repository icon' src={RepositoriesLightIcon} className={classes.repositoryIcon} />
              </Grid>
              <Grid item xs={9}>
                <Grid container direction='column'>
                  <Grid item>
                    <div className={classes.repositoryTitle}>
                      {repository.title}
                    </div>
                  </Grid>
                  <Grid item>
                    {
                      index===focused?
                        <div className={classes.repositoryDescriptionFocused}>
                          {repository.description}
                        </div>
                      :
                        <div className={classes.repositoryDescription}>
                          {repository.description}
                        </div>
                    }
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
