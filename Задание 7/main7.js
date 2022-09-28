function sortCitizens(input) {
  const splitInput = input.toLowerCase().split(' ').map((e, i) => [parseFloat(e), i + 1]).sort((a, b) => a[0] - b[0])
  return [splitInput[0][1], splitInput[(splitInput.length % 2) + 1][1], splitInput[splitInput.length - 1][1]]
}

const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
  const input = data.match(/[^\r\n]+/g)
  const output = sortCitizens(input[1])
  fs.writeFile('./output.txt', output.join(' '), () => {})
})