import React, { useState } from 'react';

import Container from '@material-ui/core/Container';

import Profile from './pages/Profile'
import InputUsername from './pages/InputUsername'

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

// Remember 50 api calls per hour

function App() {
  const [route, setRoute] = useState('input-username');
  const [username, setUsername] = useState('');

  const [profile, setProfile] = useState(defaultProfile);

  const handleSearch = () => {
    getGithubProfile(username)
      .then(profile => {
        setRoute('profile');
        setProfile(profile)
      })
  };

  return (
    <Container maxWidth='xs'>
      {
        route === 'input-username'?
          <InputUsername setUsername={setUsername}
                         handleSearch={handleSearch} />
        :
          <Profile profile={profile} />
      }

    </Container>

  );
}

export default App;
