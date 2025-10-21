// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

const pin1 = '1234'
const pin2 = '123456'
const pin3 = 'd1234'
const pin4 = '123f4'
const pin5 = "-1.234"
const pin6 = "a234"
const pin7 = "0000"
const pin8 = "1"
const pin9 = "123 "

function validatePIN(pin) {
    const length = pin.length
    const arr = []

    const newPin = pin.trim()
    for (let i = 0; i < newPin.length; i++) {
        let number = Number(newPin[i])
        const nan = Number.isNaN(number)

        if (!nan) {
            arr.push(number)
        }
    }

    if ((arr.length === length) && (length === 4 || length === 6)) {
        return true
    }
    return false
}

console.log(validatePIN(pin9));