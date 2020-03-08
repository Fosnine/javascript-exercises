const reverseString = function(string) {
    let strArr = Array.from(string);
    let newString ="";
    for (let i = 1; i<=strArr.length ; i++) {
        newString += strArr[string.length - i];
    }
    return newString;
}

module.exports = reverseString
