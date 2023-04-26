function capitalize(string) {
    let firstLetter = string.substring(0, 1);
    firstLetter = firstLetter.toUpperCase();
    let rest = string.slice(1);
    let newString = firstLetter + rest;
    return newString;
}

function reverseString(string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}

const calculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    },

    divide(a, b) {
        return a / b;
    }
}

function ceaserCipher(string, shift) {
    return string.replace(/[a-z]/g, (char) =>
        String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97)
    );
}

function analyzeArray(array) {
    const length = array.length;
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    const average = total / array.length;

    const min = Math.min(...array);
    const max = Math.max(...array);

    return{average, min, max, length}
}

module.exports = { capitalize, reverseString, calculator, ceaserCipher, analyzeArray }

