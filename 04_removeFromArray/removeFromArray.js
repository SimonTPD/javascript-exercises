const removeFromArray = function(inputArray) {
    let returnArray = inputArray;
    let elToRemove;
    
    for(let i = 1; i < arguments.length; i++){
        elToRemove = arguments[i];
        returnArray = returnArray.filter(el => el !== elToRemove);
    }
    
    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
