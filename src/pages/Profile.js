import React, { useEffect } from 'react';
import ScrollBooster from "scrollbooster";

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import ProfileInfo from '../components/profile-info/ProfileInfo';
import About from '../components/about/About';
import Organizations from '../components/organizations/Organizations';
import Repositories from '../components/repositories/Repositories';
import ProfileHead from '../components/profile-head/ProfileHead';

const useStyles = makeStyles(theme => ({
  profileHead: {
    backgroundColor: 'white',
    position: 'sticky',
    top: 0,
    width: '100%',
    margin: '0',
    zIndex: 1,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(3),
  },
  profileBody: {
    marginBottom: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  viewport: {
    width: '100%',
    height: '40em',
    overflow: 'hidden',
    cursor: 'grabbing',
  }
}))


const ScrollArea = ({ viewportClass, children }) =>
  <div className={viewportClass} id='viewport'>
    <div id='content'>
      { children }
    </div>
  </div>


function App({ profile }) {
  const classes = useStyles();

  useEffect(() => {
    new ScrollBooster({
      viewport: document.querySelector("#viewport"),
      content: document.querySelector("#content"),
      direction: "vertical",
      scrollMode: "transform"
    });
  }, [])

  return (
    <React.Fragment>
      <div className={classes.profileHead}>
        <ProfileHead profile={profile} />
      </div>
      <ScrollArea viewportClass={classes.viewport}>
        <Grid container direction='column' justify='center' spacing={3}
              className={classes.profileBody}>
          <Grid item>
            <ProfileInfo repositoriesCount={profile.repositoriesCount} starsCount={profile.starsCount}
                         followersCount={profile.followersCount} followingCount={profile.followingCount} />
          </Grid>
          <Grid item>
            <About description={profile.description} />
          </Grid>
          <Grid item>
            <Organizations organizations={profile.organizations} />
          </Grid>
          <Grid item>
            <Repositories repositories={profile.repositories} focused={0} />
          </Grid>
        </Grid>
      </ScrollArea>
    </React.Fragment>
  );
}

export default App;
