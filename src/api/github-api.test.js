import { getGithubProfile } from './github-api';

it('Getting only relevant data', () => {
  const username = 'oscaramos';
  return getGithubProfile(username).then(profile => {
    expect(profile.name).toBe('Oscar Ramos');
    expect(profile.username).toBe('oscaramos');
    expect(profile.blog).toBe('');
    expect(profile.avatarUrl).toBe('https://avatars1.githubusercontent.com/u/21105282?v=4');
    expect(profile.email).toBe(null);  // Does not work until authenticate to github

    expect(profile.repositoriesCount).toBe(34);
    expect(profile.starsCount).toBe(9);
    expect(profile.followersCount).toBe(2);
    expect(profile.followingCount).toBe(0);

    expect(profile.description).toBe('.');

    expect(profile.organizations).toEqual([
      {
        avatarUrl: 'https://avatars1.githubusercontent.com/u/35373879?v=4'
      }
    ]);
    expect(profile.repositories[0]).toEqual(
      {
        name: 'Analisis_Numerico',
        description: 'Programa final del curso de analisis numerico.'
      }
    );
  });
});

// user with no stars
