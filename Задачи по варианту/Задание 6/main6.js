function swap(arr, x, y) {
  const tmp = arr[y]
  arr[y] = arr[x]
  arr[x] = tmp
}

function bubble_sort(arr) {
  const copy = Array.from(arr)
  const n = copy.length
  for (let i = 0; i < n; i += 1)
    for (let j = 0; j < (n - i - 1); j += 1)
      if (copy[j] > copy[j+1])
        swap(copy, j, j+1)
  return copy
}

const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
  const input = data.match(/[^\r\n]+/g)
  const output = bubble_sort(input[1].split(' ').map(Number))
  fs.writeFile('./output.txt', output.join(' '), () => {})
})
