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

const inputArr = [5, 'A']
const output = palindrome(inputArr[0], inputArr[1])
console.log(output)