const palindromes = function (str) {
    strToLC = str.toLowerCase();
    let lettersAndDigitsOnly = [];
    for(let i = 0; i < strToLC.length; i++){
        let char = strToLC.charCodeAt(i);
        if ((char >= 48 && char <= 57) ||
            (char >= 65 && char <= 90) ||
            (char >= 97 && char <= 122)){
            lettersAndDigitsOnly.push(strToLC[i]);
        }
    }
    strToCheck = lettersAndDigitsOnly.join('');

    let isPal = true;
    let i = 0;
    while (i < Math.floor(strToCheck.length / 2) && isPal){
        isPal = (strToCheck[i] == strToCheck[strToCheck.length - i - 1]) ? 
            true : false;
        i++;
    }
    return isPal;
};

// Do not edit below this line
module.exports = palindromes;
