// Description:
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

const arr = ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength (array) {
    const newArrNum = []
    const newArrStr = []

    for (let i = 0; i < array.length; i++) {
        newArrNum.push(array[i].length)
    }

    newArrNum.sort((a, b) => a - b)
    for (let j = 0; j < newArrNum.length; j++) {
        for (let i = 0; i < array.length; i++) {
            if (newArrNum[j]===array[i].length) {
                newArrStr.push(array[i])
            }
        }
    }

    return newArrStr;
}

console.log(sortByLength(arr));
