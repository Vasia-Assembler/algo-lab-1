function addBinary(first, second) {
  const n = Math.max(first.length, second.length)
  const sum = parseInt(first, 2) + parseInt(second, 2)
  const result = sum.toString(2).slice(sum.length - (n + 1)).split('').map(Number)
  return result
}

const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
    const input = data.match(/\d+/g)
    const output = addBinary(input[0], input[1])
    fs.writeFile('./output.txt', output.join(''), () => {})
})
