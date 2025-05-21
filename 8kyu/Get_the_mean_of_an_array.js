// Description:
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

const array_5 = [1, 2, 3, 4, 5]

function getAverage(marks){
    let sum = 0
    let aver
    for (let i = 0; i < marks.length; i++) {
        sum+=marks[i]
    }
    return aver = Math.floor(sum/marks.length)
}

console.log(getAverage(array_5));