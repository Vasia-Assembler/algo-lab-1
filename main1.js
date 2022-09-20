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

const inputArr = [31, 41, 59, 26, 41, 58]
const sortedArr = insertionSort(inputArr)
const output = sortedArr.join(' ')
console.log(output)