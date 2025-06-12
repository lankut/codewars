// Description:
// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

const arr = ["1", "2", "3"]

function toNumberArray(stringarray){
    const newArr = []
    for (let i = 0; i < stringarray.length; i++) {
        newArr.push(Number(stringarray[i]))
    }
    return newArr
}
console.log(toNumberArray(arr));
