const opArray = []

function swap(arr, x, y) {
  const tmp = arr[y]
  arr[y] = arr[x]
  arr[x] = tmp
  opArray.push([x, y])
}

function selection_sort(arr) {
  const copy = arr.slice()
  const n = copy.length
  for (let i = 0; i < n; ++i) {
    let min = i
    for (let j = i+1; j < n; ++j) {
      if (copy[j] < copy[min]) min = j;
    }
    if (min != i) {
      swap(copy, min, i)
    }
  }
  return copy
}

const fs = require('fs/promises')

async function w(data) {
    const input = data.match(/[^\r\n]+/g)
    selection_sort(input[1].split(' ').map(Number))
    let str = ''
    for (const i of opArray) {
      str += 'Swap elements at indices ' + i[0] + ' and ' + i[1] + '\n'
    }
    fs.appendFile('output.txt', str + 'No more swaps needed.\n', () => {})
}
fs.readFile('./input.txt', 'utf8').then((d) => w(d))
