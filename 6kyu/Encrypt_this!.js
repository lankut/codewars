// Description:
// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function (text) {
    const textArr = text.split(' ')
    const newArr = []
    for (let i = 0; i < textArr.length; i++) {
        const encr0 = textArr[i].charCodeAt(0)
        const encr = encr0 + textArr[i][textArr[i].length - 1]
        if (textArr[i].length === 2) {
            newArr.push(encr)
        } else if (textArr[i].length === 1) {
            newArr.push(encr0)
        } else if (textArr[i].length > 2) {
            const encr2 = encr0 + textArr[i][textArr[i].length - 1] + textArr[i].slice(2, textArr[i].length - 1) + textArr[i][1]
            newArr.push(encr2)
        }
    }

const encrWords = newArr.join(' ')

return encrWords
}
