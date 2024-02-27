const repeatString = function(string, numRepeat) {
    let returnString = '';
    
    if (numRepeat < 0) returnString = 'ERROR';
    else for (let i = 0; i < numRepeat; i++) returnString += string;

    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
