function sort(n, test_arr, f) {
  const opArray = []
  test_arr.sort((a, b) => {
    opArray.push([Math.min(a, b), Math.max(a, b)])
    return a - b
  })
  return opArray
}

const fs = require('fs/promises')

async function w(data) {
    const input = data.match(/[^\r\n]+/g)
    const output = sort(parseInt(input[0], 10), input[1].split(' ').map(Number), './output.txt')
    for (const i of output) {
      await fs.appendFile('output.txt', 'Swap elements at indices ' + i[0] + ' and ' + i[1] + '\n', () => {})
    }
    await fs.appendFile('output.txt', 'No more swaps needed.\n', () => {})
}
fs.readFile('./input.txt', 'utf8').then((d) => w(d))
