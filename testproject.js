function capitalize(string){
    let firstLetter = string.substring(0,1);
    firstLetter = firstLetter.toUpperCase();
    let rest = string.slice(1);
    let newString = firstLetter + rest;
    return newString;
}

function reverseString(string){
    let reversedString = "";
    for (let i = string.length - 1; i >=0 ; i--){
        reversedString += string[i];
    }
    return reversedString;
}

module.exports = {capitalize, reverseString}

