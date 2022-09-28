function insertionSort(arr) {
    const copy = [...arr]
    const index_arr = []
    for (const i in copy) {
        const current = copy[i]
        let j = i - 1
        while ((j > -1) && (current < copy[j])) {
            copy[j+1] = copy[j]
            j--
        }
        index_arr[i] = j+2
        copy[j+1] = current
    }
    return [index_arr, copy]
}

const fs = require('fs')
fs.readFile('./input.txt', 'utf8', (err, data) => {
    const input = data.match(/[^\r\n]+/g)
    const output = insertionSort(input[1].split(' ').map(Number))
    fs.writeFile('./output.txt', output[0].join(' ') + '\n' + output[1].join(' '), () => {})
  })
