function linearSearch(arr, element) {
    const all_instances = []
    arr.reduce((p, c, i, a) => {
        if (c === element)
            all_instances.push(i)
    })
    const n = all_instances.length
    if (n === 0)
        return "-1"
    if (n === 1)
        return all_instances[0].toString(10)
    if (n > 1)
        return n.toString(10) + ' ' + all_instances.join(',')
}

const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
  const input = data.match(/[^\r\n]+/g)
  const output = linearSearch(input[0].split(' ').map(Number), Number(input[1]))
  fs.writeFile('./output.txt', output, () => {})
})
