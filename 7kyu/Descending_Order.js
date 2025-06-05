// Description:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321
const input = 123456789

function descendingOrder(n){
    stringNumber = String(n)
    strNumberArr = []
    for (let i = 0; i < stringNumber.length; i++) {
        strNumberArr.push(stringNumber[i])
    }
    strNumberArr.sort((a, b) => b - a)
    const newStrNumber = strNumberArr.join('')
    const res = Number(newStrNumber)
    return res
}

console.log(descendingOrder(input));
