function Swap(arr, index, s1) {
    while ((index > -1) && (s1 > arr[index])) {
        arr[index+1] = arr[index]
        index--
    }
    arr[index+1] = s1

}

function insertionSort(arr) {
    const n = arr.length;
    const copy = [...arr]
    const index_arr = []
    for (const i in copy) {
        const current = copy[i]
        let j = i - 1
        Swap(copy, j, current)
    }
    return [index_arr, copy]
}

const inputArr = [1, 8, 4, 2, 3, 7, 5, 6, 9, 0]
const [index, sortedArr] = insertionSort(inputArr)
const output = sortedArr.join(' ')
console.log(output)
