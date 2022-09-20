function insertionSort(arr) {
    const n = arr.length;
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

const inputArr = [1, 8, 4, 2, 3, 7, 5, 6, 9, 0]
const [index, sortedArr] = insertionSort(inputArr)
const output = (index.join(' ') + '\n') + sortedArr.join(' ')
console.log(output)
