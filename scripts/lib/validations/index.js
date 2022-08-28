const { validateLinkedin } = require('./linkedin')
const { validateBody } = require('./body')
const { validateName } = require('./name')
const { validateEmail } = require('./email')
const { validateGithub } = require('./github')

module.exports = {
  validateLinkedin,
  validateBody,
  validateName,
  validateEmail,
  validateGithub,
}
