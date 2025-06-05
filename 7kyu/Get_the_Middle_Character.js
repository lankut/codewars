// Description:
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

const word = 'test'

function getMiddle(s) {
    let letter = []
    let count_1 = s.length
    let count_2 = s.length / 2 - 1
    let count_3 = Math.floor(count_1 / 2)

    console.log(count_3);
    
    if (count_1 % 2 === 0) {
        for (let i = count_2; i <= count_2 + 1; i++) {
            letter.push(s[i])
        }
    } else if (count_1 % 2 === 1) {
        for (let i = count_3; i <=count_3; i++) {
            letter.push(s[i])
        }
    }
    let newWord = letter.join('')
    return newWord;
}

console.log(getMiddle(word));