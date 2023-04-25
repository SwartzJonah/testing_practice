function capitalize(string){
    let firstLetter = string.substring(0,1);
    firstLetter = firstLetter.toUpperCase();
    console.log(firstLetter);
    let rest = string.slice(1);
    let newString = firstLetter + rest;
    return newString;
}

module.exports = capitalize;