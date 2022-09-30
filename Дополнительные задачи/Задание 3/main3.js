function Swap(arr, index, s1) {
    while ((index > -1) && (s1 > arr[index])) {
        arr[index+1] = arr[index]
        index--
    }
    arr[index+1] = s1

}

function insertionSort(arr) {
    const copy = [...arr]
    for (const i in copy) {
        const current = copy[i]
        let j = i - 1
        Swap(copy, j, current)
    }
    return copy
}

const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
  const input = data.match(/[^\r\n]+/g)
  const output = insertionSort(input[1].split(' ').map(Number))
  fs.writeFile('./output.txt', output.join(' '), () => {})
})