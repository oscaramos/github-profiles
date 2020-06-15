const getUserStars = (username) =>
  fetch(`https://api.github.com/users/${username}/starred`)
  .then(resp => resp.json())
  .then(starred => starred.length)

const getUserProfile = (username) =>
  fetch(`https://api.github.com/users/${username}`)
  .then(resp => resp.json())

export const getGithubProfile = (username) => {
  return Promise.all([getUserProfile(username), getUserStars(username)])
    .then(values => {
      const profile = values[0];
      const stars = values[1];
      return {...profile, stars: stars}
    })
}


