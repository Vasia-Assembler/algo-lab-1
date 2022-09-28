function swap(arr, x, y) {
  const tmp = arr[y]
  arr[y] = arr[x]
  arr[x] = tmp
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

const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
  const input = data.match(/[^\r\n]+/g)
  const output = selection_sort(input[1].split(' ').map(Number))
  fs.writeFile('./output.txt', output.join(' '), () => {})
})