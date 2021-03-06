import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Profile from './pages/Profile'
import InputUsername from './pages/InputUsername'
import SnackbarMessage from './components/snackbar-message/SnackbarMessage'

import { getGithubProfile } from './api/github-api';

const defaultProfile = {
  name: 'Ashley Simpson',
  username: 'ashley',
  blog: 'www.ahsleydev.com',
  avatarUrl: 'https://avatars1.githubusercontent.com/u/21105282?v=4',
  email: 'ashley@techcompany.com',

  repositoriesCount: 3,
  starsCount: 128,
  followersCount: 15,
  followingCount: 60,

  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio eum ex illum, iste minima optio vel? Aliquam animi, culpa et id nam neque tempore ut? Doloremque dolores non saepe.',

  organizations: [
    {
      avatarUrl: 'https://avatars1.githubusercontent.com/u/35373879?v=4'
    }
  ],

  repositories: [
    {
      name: 'Data manager',
      description: 'Quick start for big data projects'
    },
    {
      name: 'Data manager',
      description: 'Quick start for big data projects'
    },
    {
      name: 'Data manager',
      description: 'Quick start for big data projects'
    },
    {
      name: 'Analisis_Numerico',
      description: 'Programa final del curso de analisis numerico.'
    }
  ],
}

// From: https://w3bits.com/prevent-chrome-pull-to-refresh-css/
const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      /* Break the flow */
      position: 'absolute',
      top: '0px',

      /* Give them all the available space */
      width: '100%',
      height: '100%',

      /* Remove the margins if any */
      margin: '0',

      /* Allow them to scroll down the document */
      overflowY: 'hidden'
    }
  }
}))


function App() {
  const [route, setRoute] = useState('input-username');
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const [username, setUsername] = useState('');
  const [open, setOpen] = useState(false);

  const [profile, setProfile] = useState(defaultProfile);

  const handleSearch = () => {
    getGithubProfile(username)
      .then(profile => {
        setRoute('profile');
        setProfile(profile);
      })
      .catch(error => {
        console.log(error);
        setOpen(true);
      })
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Container maxWidth={matchesSM? 'xs': 'sm'}>
      {
        route === 'input-username'?
          <InputUsername setUsername={setUsername}
                         handleSearch={handleSearch}
                         error={open}
          />
        :
          <Profile open={open} profile={profile} />
      }

      <SnackbarMessage message="The username is not valid"
                       open={open} handleClose={handleClose}/>
    </Container>
  );
}

export default App;
