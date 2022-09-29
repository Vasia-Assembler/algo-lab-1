function mergeSort (arr, predicate) {
  if (arr.length === 1) {
    return arr
  }
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(
    mergeSort(left, predicate),
    mergeSort(right, predicate),
    predicate
  )
}


function merge (left, right, predicate) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (predicate(left[indexLeft], right[indexRight])) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

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
    const opArray = []
    mergeSort(input[1].split(' ').map(Number), (a, b) => {
      opArray.push([Math.min(a, b), Math.max(a, b)])
      return a < b
    })
    for (const i of opArray) {
      await fs.appendFile('output.txt', 'Swap elements at indices ' + i[0] + ' and ' + i[1] + '\n', () => {})
    }
    await fs.appendFile('output.txt', 'No more swaps needed.\n', () => {})
}
fs.readFile('./input.txt', 'utf8').then((d) => w(d))
