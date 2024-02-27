const reverseString = function(inputString) {
    let outputString = '';
    for (let i = 0; i < inputString.length; i++){
         outputString = outputString.concat(inputString[inputString.length - i - 1]);
    }
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
