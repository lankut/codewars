// Description:
// Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string, return its last element. It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty.

// Examples
// last(5)               ==> 5
// last([1, 2, 3, 4])    ==>  4
// last("xyz")           ==> "z"
// last(1, 2, 3, 4)      ==>  4
// last([1, 2], [3, 4])  ==>  [3, 4]
// last([[1, 2], [3, 4]])  ==>  [3, 4]


function last2(...anything) {
    let lastIndex = null
    for (let i = 0; i < anything.length; i++) {
        if (typeof anything[i] === 'object') {
            lastIndex = anything[i]
            if (anything.length === 1) {
                lastIndex = anything[i][anything[i].length-1]
            }
        }
        else if (typeof anything[i] === 'string') {
            lastIndex = anything[i][anything[i].length - 1]
        if (anything.length > 1){
            lastIndex = anything[i]
        }
        } else if (typeof anything[i] === 'number') {
            lastIndex = anything[i]
        }
    }
    return lastIndex
}

console.log(last2(7, "zyx", "xb"));