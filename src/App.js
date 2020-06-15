import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import { getGithubProfile } from './api/github-api';

import ProfileInfo from './components/profile-info/ProfileInfo';

const useStyles = makeStyles(theme => ({

}))


function App() {
  const classes = useStyles();

  const [profile, setProfile] = useState({});

  useEffect(() => {
    getGithubProfile('oscaramos')
      .then(profile => {
        setProfile(profile)
      })
  }, [])

  return (
    <div>
      {/*-----Profile info-----*/}
      <ProfileInfo repositoriesCount={3} starsCount={123} followersCount={15} followingCount={60}/>
    </div>
  );
}

export default App;
