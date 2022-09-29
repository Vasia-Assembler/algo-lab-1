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

function generate_palindrome(characters) {
    let str = ""
    for (const i in characters) {
        const chr = i
        const occurences = characters[i]
        const n = str.length
        if (n == 0) {
            str = chr.repeat(occurences) // must be a single charcter string
        } else if (occurences % 2 == 0) {
            const half = occurences / 2
            const repeated = chr.repeat(half)
            str = repeated + str + repeated
        } else {
            if (n % 2 !== 0) {
                str = chr.repeat(occurences) // must be a single charcter string
            } else {
                const middle = (n + 1) / 2
                str = str.substring(0, middle) + chr.repeat(occurences) + str.substring(middle)
            }
        }
    }
    return str
}

function palindrome(n, str) {
    const counts = {}
    for (const i of str) {
        counts[i] = counts[i] ? counts[i] + 1 : 1
    }
    const sorted = mergeSort(Object.keys(counts), (a, b) => a > b).reduce((acc, key) => ({ ...acc, [key]: counts[key]}), {})
    return generate_palindrome(sorted)
}

const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
    const input = data.match(/[^\r\n]+/g)
    const output = palindrome(input[0], input[1])
    fs.writeFile('./output.txt', output, () => {})
})
