// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:

const arr = ['a', 1, 2, false, 'b']
// expected output is:

// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }

function separateTypes(input) {
    const obj = {}

    for (let i = 0; i < input.length; i++) {
        if (typeof (input[i]) === 'number') {
            if (obj.number === undefined) {
                obj.number = []
            }
            obj.number.push(input[i])
        } else if (typeof (input[i]) === 'string') {
            if (obj.string === undefined) {
                obj.string = []
            }
            obj.string.push(input[i])
        } else if (typeof (input[i]) === 'boolean') {

            if (obj.boolean === undefined) {
                obj.boolean = []
            }
            obj.boolean.push(input[i])
        }
    }
    return obj
}

console.log(separateTypes(arr));
