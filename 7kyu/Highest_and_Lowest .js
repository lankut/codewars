// Description:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


function highAndLow(numbers) {

    const arr = []

    let str = ''
    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] !== ' ') {
            str += numbers[i]
        } 
        if (numbers[i] === ' ' || i === (numbers.length - 1)) {
            arr.push(str)
            str = ''
        }
    }

    let max = Number(arr[0])
    let min = Number(arr[0])

    for (let j = 1; j < arr.length; j++) {
        if (Number(arr[j]) > max) {
            max = Number(arr[j])
        } else if (Number(arr[j]) < min) {
            min = Number(arr[j])
        }
    }
    const res = `${String(max)} ${String(min)}`

    return res
}
