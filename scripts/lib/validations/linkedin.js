const validateLinkedin = (url) => {
  const match = url.match(
    /^((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/
  )
  return match && match.length > 0
}

module.exports = {
  validateLinkedin,
}
