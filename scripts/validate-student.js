const {
  validateLinkedin,
  validateBody,
  validateName,
  validateEmail,
  validateGithub,
} = require('./lib/validations')

const fs = require('fs/promises'),
  fm = require('front-matter')

const validateStudent = async (path) => {
  const data = await fs.readFile(path, 'utf8')

  const { body, attributes } = fm(data)

  const { name, linkedin, email, github } = attributes

  const isLinkedinValid = validateLinkedin('' + linkedin)
  const isBodyValid = validateBody(body)
  const isNameValid = validateName(name)
  const isEmailValid = validateEmail(email)
  const isGithubValid = await validateGithub(github)

  console.log({
    isLinkedinValid,
    isBodyValid,
    isNameValid,
    isEmailValid,
    isGithubValid,
  })
}

validateStudent('./students/renato-siqueira.md')
