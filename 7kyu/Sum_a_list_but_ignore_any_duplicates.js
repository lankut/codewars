// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

const arr = [1, 1, 2, 3] //5
const arr2 = [1, 1, 2, 2, 3] //3
const arr3 = [5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]//21
const arr4 = [0, 10, 8, 9, 7, 3, 3, 9, 3, 6, 0]//31

function sumNoDuplicates(numList) {
    const newArr = []
    const arrFilt = []
    for (let i = 0; i < numList.length; i++) {
        for (let j = 0; j < numList.length; j++) {
            if (i === j) continue
            else if (numList[i] === numList[j]) {
                newArr.push(numList[i])
            }
        }
    }

    for (let i = 0; i < numList.length; i++) {
        if (!newArr.includes(numList[i])) {
            arrFilt.push(numList[i])
        }
    }

    let sum = 0
    for (let i = 0; i < arrFilt.length; i++) {
        sum += arrFilt[i]
    }
    return sum
}

console.log(sumNoDuplicates(arr4));
