// Description:
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

const array_2 = [78, 56, 232, 12, 8]

function findSmallestInt(arr) {
    let number = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < number) {
            number = arr[i]
        }
    }
    return number;
}

console.log(findSmallestInt(array_2));