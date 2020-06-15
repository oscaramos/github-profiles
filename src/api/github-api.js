const getUserStars = (username) =>
  fetch(`https://api.github.com/users/${username}/starred`)
  .then(resp => resp.json())
  .then(starred => starred.length)

const getUserProfile = (username) =>
  fetch(`https://api.github.com/users/${username}`)
  .then(resp => resp.json())

const getUserOrganizations = (username) =>
  fetch(`https://api.github.com/users/${username}/orgs`)
    .then(resp => resp.json())
    .then(orgs => orgs.map(
      org => ({ avatarUrl: org.avatar_url })
    ))

const getUserRepositories = (username) =>
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(resp => resp.json())
    .then(repos => repos.map(
      repo => ({ name: repo.name,
                 description: repo.description })
    ))

export const getGithubProfile = (username) => {
  const promises = [
    getUserProfile(username),
    getUserStars(username),
    getUserOrganizations(username),
    getUserRepositories(username)
  ];

  return Promise.all(promises)
    .then(values => {
      const profile = values[0];
      const stars = values[1];
      const organizations = values[2];
      const repositories = values[3];

      return {...profile,
        username: profile.login,
        avatarUrl: profile.avatar_url,

        repositoriesCount: profile.public_repos,
        starsCount: stars,
        followersCount: profile.followers,
        followingCount: profile.following,

        description: profile.bio,
        organizations: organizations,
        repositories: repositories
      }
    })
}


