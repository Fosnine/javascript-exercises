const removeFromArray = function(...arguments) {
    let array = arguments[0];
    let newArray = [];
    array.forEach((item) => {
        if (!(arguments.includes(item))) {
            newArray.push(item);
        } 
    });
    return newArray;
}

module.exports = removeFromArray
