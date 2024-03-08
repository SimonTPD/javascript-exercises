const fibonacci = function(num) {
    if (+num < 0) return 'OOPS';
    if (+num == 0) return 0;
    if (+num <= 2) return 1;
    let fib = [1, 1];
    for (let i = 3; i <= num; i++){
        fib = [fib[1], fib[0] + fib[1]];
    }
    return fib[1];
};

// Do not edit below this line
module.exports = fibonacci;
