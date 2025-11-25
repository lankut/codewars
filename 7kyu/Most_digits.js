// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){

    let length = array[0].toString().length
    let number = array[0]

    for (let i = 1; i < array.length; i++) {
        if (length < array[i].toString().length) {
            length = array[i].toString().length
            number = array[i]
        }
    }

    return number
}