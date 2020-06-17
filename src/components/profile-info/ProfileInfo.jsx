import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import RepositoriesIcon from '../../assets/icons/Repositories.svg';
import StarsIcon from '../../assets/icons/Stars.svg';
import FollowersIcon from '../../assets/icons/Followers.svg';
import FollowingIcon from '../../assets/icons/Following.svg';

const useStyles = makeStyles(theme => ({
  infoLabel: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '9px',
    lineHeight: '11px',
    fontWeight: '300',
    letterSpacing: '0.02em',
    color: '#7A7A7A'
  },
  infoNumber: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    lineHeight: '17px',
    fontWeight: '700',
    color: '#23292D'
  },
  infoIcon: {
    marginBottom: '0.3em',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  infoContainer: {
    textAlign: 'center',
    width: "25%"
  },
  infoContainerBorder: {
    borderRight: '1.5px solid #DADADA'
  }
}))

function ProfileInfo({ repositoriesCount, starsCount, followersCount, followingCount }) {
  const classes = useStyles();

  return (
  <Grid container direction='row' justify='center'>
    <Grid item className={classes.infoContainer}>
      <Grid container direction='column'>
        <Grid item>
          <img alt='Repositories icon' src={RepositoriesIcon} className={classes.infoIcon} />
        </Grid>
        <Grid item className={classes.infoContainerBorder}>
          <div className={classes.infoNumber}>{repositoriesCount}</div>
          <div className={classes.infoLabel}>Repositories</div>
        </Grid>
      </Grid>
    </Grid>
    <Grid item className={classes.infoContainer}>
      <Grid container direction='column'>
        <Grid item>
          <img alt='Repositories icon' src={StarsIcon} className={classes.infoIcon} />
        </Grid>
        <Grid item className={classes.infoContainerBorder}>
          <div className={classes.infoNumber}>{starsCount}</div>
          <div className={classes.infoLabel}>Stars</div>
        </Grid>
      </Grid>
    </Grid>
    <Grid item className={classes.infoContainer}>
      <Grid container direction='column'>
        <Grid item>
          <img alt='Repositories icon' src={FollowersIcon} className={classes.infoIcon} />
        </Grid>
        <Grid item className={classes.infoContainerBorder}>
          <div className={classes.infoNumber}>{followersCount}</div>
          <div className={classes.infoLabel}>Followers</div>
        </Grid>
      </Grid>
    </Grid>
    <Grid item className={classes.infoContainer}>
      <Grid container direction='column'>
        <Grid item>
          <img alt='Repositories icon' src={FollowingIcon} className={classes.infoIcon} />
        </Grid>
        <Grid item>
          <div className={classes.infoNumber}>{followingCount}</div>
          <div className={classes.infoLabel}>Following</div>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  );
}

export default ProfileInfo;
