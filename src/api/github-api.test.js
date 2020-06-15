import { getGithubProfile } from './github-api';

it('Getting only relevant data', () => {
  const username = 'oscaramos';
  return getGithubProfile(username).then(profile => {
    expect(profile.public_repos).toBe(33);
    expect(profile.stars).toBe(9);
    expect(profile.followers).toBe(2);
    expect(profile.following).toBe(0);
  });
});

// user with no stars
