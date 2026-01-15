// You are having a BBQ, and after the BBQ you are left with some rubbish to recycle.

// There are 3 recycling boxes: Red: Plastic, Green: Glass, Blue: Card.

// You want to sort the rubbish according to the material and return the number of items in each box as an array (or a tuple in Python):

// [plastic, glass, card]
// The material type can be determined based on the sign of the item's value:

// Plastic: value > 0
// Glass: value < 0
// Card: value = 0
// Example
// rubbish = [5, -9, 0, 6, -84, -95, 15]
// Plastic = 3, Glass = 3, Card = 1
// Output: [3, 3, 1]

function recycleMe(recycle) {
    const arr = [0, 0, 0]

    for (let i = 0; i < recycle.length; i++) {

        if (recycle[i] > 0) {
            arr[0] += 1
        } else if (recycle[i] < 0) {
            arr[1] += 1
        } else if (recycle[i] === 0) {
            arr[2] += 1
        }
    }
    return arr
}