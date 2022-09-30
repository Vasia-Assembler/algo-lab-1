function insertionSort(arr) {
    const n = arr.length;
    const copy = [...arr]
    for (const i in copy) {
        const current = copy[i]
        let j = i - 1
        while ((j > -1) && (current < copy[j])) {
            copy[j+1] = copy[j]
            j--
        }
        copy[j+1] = current
    }
    return copy
}

const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
  const input = data.match(/[^\r\n]+/g)
  const output = insertionSort(input[1].split(' ').map(Number))
  fs.writeFile('./output.txt', output.join(' '), () => {})
})
