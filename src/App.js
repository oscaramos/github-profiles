import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import Container from '@material-ui/core/Container';

import ProfileInfo from './components/profile-info/ProfileInfo';
import About from './components/about/About';
import Organizations from './components/organizations/Organizations';
import Repositories from './components/repositories/Repositories';
import ProfileHead from './components/profile-head/ProfileHead';

// import { getGithubProfile } from './api/github-api';

const useStyles = makeStyles(theme => ({
  profile: {
    paddingTop: theme.spacing(4)
  },
  scrolleable: {
    marginTop: theme.spacing(4)
  },
  about: {
    marginTop: theme.spacing(4)
  },
  organizations: {
    marginTop: theme.spacing(2)
  },
  repositories: {
    marginTop: theme.spacing(2)
  }
}))


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
      <div className={classes.profile}>
        <ProfileHead profile={profile} />
      </div>
      <div className={classes.scrolleable}>
        <div className={classes.profileinfo}>
          <ProfileInfo repositoriesCount={3} starsCount={123} followersCount={15} followingCount={60} />
        </div>
        <div className={classes.about}>
          <About description={description} />
        </div>
        <div className={classes.organizations}>
          <Organizations orgImageUrls={orgImageUrls} />
        </div>
        <div className={classes.repositories}>
          <Repositories repositoriesInfo={repositoriesInfo} focused={0} />
        </div>
      </div>
    </Container>
  );
}

export default App;
