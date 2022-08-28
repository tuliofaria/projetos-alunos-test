const { Octokit } = require('@octokit/rest')
const octokit = new Octokit()

const validateGithub = async (username) => {
  try {
    await octokit.rest.users.getByUsername({
      username,
    })
    return true
  } catch (err) {}
  return false
}

module.exports = {
  validateGithub,
}
