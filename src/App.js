import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import ScrollBooster from "scrollbooster";

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
    margin: '0',
    zIndex: 1
  },
  profileBody: {
    marginBottom: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  viewport: {
    width: '100%',
    height: '20em',
    overflow: 'hidden',
    cursor: 'grabbing'
  }
}))

// Remember 50 api calls per hour

const ScrollArea = ({ viewportClass, children }) =>
  <div className={viewportClass} id='viewport'>
    <div id='content'>
      { children }
    </div>
  </div>


function App() {
  const classes = useStyles();


  const [profile, setProfile] = useState({
    name: 'Ashley Simpson',
    username: 'ashley',
    url: 'www.ahsleydev.com',
    avatarUrl: 'https://avatars1.githubusercontent.com/u/21105282?v=4',
    email: 'ashley@techcompany.com',

    repositoriesCount: 3,
    starsCount: 128,
    followersCount: 15,
    followingCount: 60,

    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio eum ex illum, iste minima optio vel? Aliquam animi, culpa et id nam neque tempore ut? Doloremque dolores non saepe.',

    orgImageUrls: ['https://avatars1.githubusercontent.com/u/35373879?v=4',
      'https://avatars1.githubusercontent.com/u/35373879?v=4'],
    repositoriesInfo: [
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
    ],
  });

  useEffect(() => {
    new ScrollBooster({
      viewport: document.querySelector("#viewport"),
      content: document.querySelector("#content"),
      direction: "vertical",
      scrollMode: "transform"
    });
    // getGithubProfile('oscaramos')
    //   .then(profile => {
    //     setProfile(profile)
    //   })
  }, [])

  return (
    <Container maxWidth='xs'>
      <div className={classes.profileHead}>
        <ProfileHead profile={profile} />
      </div>
      <ScrollArea viewportClass={classes.viewport}>
        <Grid container direction='column' justifyContent='center' spacing={3}
              className={classes.profileBody}>
          <Grid item>
            <ProfileInfo repositoriesCount={profile.repositoriesCount} starsCount={profile.starsCount}
                         followersCount={profile.followersCount} followingCount={profile.followingCount} />
          </Grid>
          <Grid item>
            <About description={profile.description} />
          </Grid>
          <Grid item>
            <Organizations orgImageUrls={profile.orgImageUrls} />
          </Grid>
          <Grid item>
            <Repositories repositoriesInfo={profile.repositoriesInfo} focused={0} />
          </Grid>
        </Grid>
      </ScrollArea>
    </Container>
  );
}

export default App;
