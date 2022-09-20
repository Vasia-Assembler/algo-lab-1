function linearSearch(arr, element) {
    return arr.indexOf(element)
}

const inputArr = [[1, 2, 3, 4, 5, 100, 534, 999], [100]]
const output = linearSearch(inputArr[0], inputArr[1][0])
console.log(output)
