import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  profileHeadContainer: {
    textAlign: 'center',
    margin: '0 auto'
  },
  avatar: {
    width: '8em',
    height: '8em'
  },
  profileName: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '26px',
    lineHeight: '31px',
    color: '#23292D'
  },
  profileUsername: {
    fontSize: '18px',
    lineHeight: '21px',
    color: '#1F1F1F',
    marginTop: '0.2em'
  },
  profileUrl: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#1F1F1F',
    marginTop: '0.2em'
  },
  profileEmail: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#1F1F1F',
    marginTop: '-0.2em'
  },
  profileButton: {
    border: '2px solid #23292D',
    borderRadius: '30px',
    marginTop: '0.8em',
    width: '8em'
  }
}))

const ProfileHead = ({ profile }) => {
  const classes = useStyles();

  return (
    <div className={classes.profileHeadContainer}>
      <img alt='avatar' src={profile.avatarUrl} className={classes.avatar}/>
      <div className={classes.profileName}>
        {profile.name}
      </div>
      <div className={classes.profileUsername}>
        {profile.username}
      </div>
      <div className={classes.profileUrl}>
        {profile.url}
      </div>
      <div className={classes.profileEmail}>
        {profile.email}
      </div>
      <Button variant='outlined' className={classes.profileButton}>
        Follow
      </Button>
    </div>
  );
};

export default ProfileHead;
