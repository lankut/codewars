// ASC Week 1 Challenge 5 (Medium #2)
// Create a function that takes a 2D array as an input, and outputs another array that contains the average values for the numbers in the nested arrays at the corresponding indexes.

// Note: the function should also work with negative numbers and floats.

// Examples
// [ [1, 2, 3, 4], [5, 6, 7, 8] ]  ==>  [3, 4, 5, 6]

// 1st array: [1, 2, 3, 4]
// 2nd array: [5, 6, 7, 8]
//             |  |  |  |
//             v  v  v  v
// average:   [3, 4, 5, 6]
// And another one:

// [ [2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34] ]  ==>  [22.5, 11, 38.75, 38.25, 19.5]

// 1st array: [  2,   3,    9,   10,    7]
// 2nd array: [ 12,   6,   89,   45,    3]
// 3rd array: [  9,  12,   56,   10,   34]
// 4th array: [ 67,  23,    1,   88,   34]
//               |    |     |     |     |
//               v    v     v     v     v
// average:   [22.5, 11, 38.75, 38.25, 19.5]

const arr10 = [[1, 2, 3, 4], [5, 6, 7, 8]]
//res = [3, 4, 5, 6]
const arr11 =[[1.2, 8.521, 0.4, 3.14, 1.9], [2, 4.5, 3.75, 0.987, 1.0]]
//res = [1.6, 6.5105, 2.075, 2.0635, 1.45])

const arr12 = [[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]

//res = [22.5, 11, 38.75, 38.25, 19.5]

function avgArray(arr) {
    const newObj = {}

    for (let i = 0; i < arr.length; i++) {
        for (let y = 0; y < arr[i].length; y++) {
            if (i === 0) {
                newObj[y] = arr[i][y]
            } else {
                newObj[y] = newObj[y] + arr[i][y]

            }
        }
    }
    const newArr0 = Object.values(newObj)
    const newArr = newArr0.map((e) => e / arr.length)

    return newArr
}

console.log(avgArray(arr12));