const validateEmail = (email) => {
  const fullEmail = email.replace('[em]', '@')
  const matches = fullEmail.match(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
  )
  return matches && matches.length > 0
}
module.exports = {
  validateEmail,
}
