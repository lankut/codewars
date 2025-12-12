// Description:
// Zebulan has worked hard to write all his python code in strict compliance to PEP8 rules. In this kata, you are a mischievous hacker that has set out to sabotage all his good code.

// Your job is to take PEP8 compatible function names and convert them to camelCase. For example:

// "camel_case" --> "camelCase"
// "zebulans_nightmare" --> "zebulansNightmare"
// "get_string" --> "getString"
// "convert_to_uppercase" --> "convertToUppercase"
// "main" --> "main"

    let newWord = []
    let index = []

    for (let i = 0; i < functionName.length; i++) {
        if (functionName[i] === '_') {
            if (index.length > 0) {
                index.push(i - index.length)
            } else {
                index.push(i)
            }
        } else {
            newWord.push(functionName[i])
        }
    }

    for (let j = 0; j < index.length; j++) {
        const char = newWord[index[j]].toUpperCase()
        newWord[index[j]] = char
    }
    const res = newWord.join('')

    return res;