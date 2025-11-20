// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// The order does not have to be strict: a sorted array can contain consecutive duplicates, e.g. [1, 1, 2, 3] is sorted in ascending order.

// It is guaranteed that there will always be a unique valid answer. More precisely:

// there will be no arrays with less than 2 elements
// there will be no arrays where all elements are equal

const arr14 = [5, 1, 2]
const arr15 = [2, 1]

function isSortedAndHow(array) {
    let flag = false
    const copyArray1 = [...array]
    const sortAscending = copyArray1.sort((a, b) => a - b)

    const copyArray2 = [...array]
    const sortDescending = copyArray2.sort((a, b) => b - a)

    const arr1 = []
    for (let i = 0; i < sortAscending.length; i++) {
        if (array[i] === sortAscending[i]) {
            arr1.push(sortAscending[i])
            if (arr1.length === sortAscending.length) {
                flag = true
                return 'yes, ascending'
            }
        }
    }
    const arr2 = []
    for (let j = 0; j < sortDescending.length; j++) {
        if (array[j] === sortDescending[j]) {
            arr2.push(sortDescending[j])
            if (arr2.length === sortDescending.length) {
                flag = true
                return 'yes, descending'
            }
        }
    }
    if (!flag) return 'no'
}

// console.log(isSortedAndHow(arr14));