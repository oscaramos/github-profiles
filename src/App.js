import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import ProfileInfo from './components/profile-info/ProfileInfo';
import About from './components/about/About';
import Organizations from './components/organizations/Organizations';
import Repositories from './components/repositories/Repositories';
import ProfileHead from './components/profile-head/ProfileHead';

// import { getGithubProfile } from './api/github-api';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      margin: 0,
      padding: 0,
    }
  },
  profileHead: {
    backgroundColor: 'white',
    position: 'sticky',
    top: 0,
    width: '100%',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(3),
    margin: '0'
  },
  profileBody: {
    marginBottom: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }
}))

// Remember 50 api calls per hour

function App() {
  const classes = useStyles();

  const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio eum ex illum, iste minima optio vel? Aliquam animi, culpa et id nam neque tempore ut? Doloremque dolores non saepe.'

  // const [profile, setProfile] = useState({});

  // useEffect(() => {
  //   getGithubProfile('oscaramos')
  //     .then(profile => {
  //       setProfile(profile)
  //     })
  // }, [])

  const orgImageUrls = ['https://avatars1.githubusercontent.com/u/35373879?v=4',
    'https://avatars1.githubusercontent.com/u/35373879?v=4']

  const repositoriesInfo = [
    {
      title: 'Data manager',
      description: 'Quick start for big data projects'
    },
    {
      title: 'Data manager',
      description: 'Quick start for big data projects'
    },
    {
      title: 'Data manager',
      description: 'Quick start for big data projects'
    }
  ]

  const profile = {
    name: 'Ashley Simpson',
    username: 'ashley',
    url: 'www.ahsleydev.com',
    avatarUrl: 'https://avatars1.githubusercontent.com/u/21105282?v=4',
    email: 'ashley@techcompany.com',
  }

  return (
    <Container maxWidth='xs'>
      <div className={classes.profileHead}>
        <ProfileHead profile={profile} />
      </div>
      <Grid container direction='column' justifyContent='center' spacing={3}
            className={classes.profileBody}>
        <Grid item>
          <ProfileInfo repositoriesCount={3} starsCount={123} followersCount={15} followingCount={60} />
        </Grid>
        <Grid item>
          <About description={description} />
        </Grid>
        <Grid item>
          <Organizations orgImageUrls={orgImageUrls} />
        </Grid>
        <Grid item>
          <Repositories repositoriesInfo={repositoriesInfo} focused={0} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
