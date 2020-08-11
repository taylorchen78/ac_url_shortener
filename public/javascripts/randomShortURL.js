function randomShortURL() {
  const number = '0123456789'
  const upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerLetter = upperLetter.toLowerCase()

  const letterStr = number + upperLetter + lowerLetter
  const urlLength = 5

  let randomURL = ''

  for (let i = 0; i < urlLength; i++) {
    randomURL += letterStr[Math.floor(Math.random() * letterStr.length)]
  }

  return randomURL
}

module.exports = randomShortURL