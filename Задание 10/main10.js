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
    const sorted = Object.keys(counts).sort().reverse().reduce((acc, key) => ({ ...acc, [key]: counts[key]}), {}) // so that palindrome is alphabetically the greatest
    return generate_palindrome(sorted)
}

const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
    const input = data.match(/[^\r\n]+/g)
    const output = palindrome(input[0], input[1])
    fs.writeFile('./output.txt', output, () => {})
})
