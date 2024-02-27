const sumAll = function(num1, num2) {
    if ((typeof num1 != 'number') || 
        (typeof num2 != 'number') ||
        (num1 < 0) || 
        (num2 < 0)) return 'ERROR';

    let numSum = Math.min(num1, num2); 
    for(let i = Math.min(num1, num2) + 1; i <= Math.max(num1, num2); i++) numSum += i;

    return numSum;
};

// Do not edit below this line
module.exports = sumAll;
