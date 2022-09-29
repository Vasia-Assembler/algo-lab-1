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
    if (predicate(left[indexLeft], right[indexRight]) <= -1) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

function sortCitizens(input) {
  const splitInput = mergeSort(input.toLowerCase().split(' ').map((e, i) => [parseFloat(e), i + 1]), (a, b) => a[0] - b[0])
  return [splitInput[0][1], splitInput[(splitInput.length % 2) + 1][1], splitInput[splitInput.length - 1][1]]
}

const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
  const input = data.match(/[^\r\n]+/g)
  const output = sortCitizens(input[1])
  fs.writeFile('./output.txt', output.join(' '), () => {})
})