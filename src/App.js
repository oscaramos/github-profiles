import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import ProfileInfo from './components/profile-info/ProfileInfo';
import About from './components/about/About';
import Organizations from './components/organizations/Organizations';
import Repositories from './components/repositories/Repositories';
import ProfileHead from './components/profile-head/ProfileHead';

import { getGithubProfile } from './api/github-api';

const useStyles = makeStyles(theme => ({}))


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
      <ProfileHead profile={profile} />
      <ProfileInfo repositoriesCount={3} starsCount={123} followersCount={15} followingCount={60} />
      <About description={description} />
      <Organizations orgImageUrls={orgImageUrls} />
      <Repositories repositoriesInfo={repositoriesInfo} focused={0} />
    </Container>
  );
}

export default App;
