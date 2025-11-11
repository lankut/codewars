// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

let isAnagram = function (test, original) {

    if (test.length === original.length) {
        const testToLowerCase = test.toLowerCase()
        const originalToLowerCase = original.toLowerCase()

        const objTest = {}
        const objOriginal = {}

        for (let i = 0; i < testToLowerCase.length; i++) {
            if (objTest[testToLowerCase[i]]) {
                objTest[testToLowerCase[i]] += 1
            } else {
                objTest[testToLowerCase[i]] = 1
            }
        }

        for (let j = 0; j < originalToLowerCase.length; j++) {
            if (objOriginal[originalToLowerCase[j]]) {
                objOriginal[originalToLowerCase[j]] += 1
            } else {
                objOriginal[originalToLowerCase[j]] = 1
            }
        }

        const keyTest = Object.keys(objTest)
        const keyOrigin = Object.keys(objOriginal)

        if (keyTest.length !== keyOrigin.length) {
            return false
        }

        for (let key of keyTest) {
            if (objTest[key] !== objOriginal[key]) {
                return false
            }
        }
        return true
    }
    return false
};

console.log(isAnagram("bQYoIpbXvxbyDsSq", "bbpIxYSqXyrQDbsv"));