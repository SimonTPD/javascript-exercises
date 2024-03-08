const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  if(arr.length == 0) return 0;
  let sumArr = 0;
  for (let i = 0; i < arr.length; i++) sumArr += arr[i];
  return sumArr;
};

const multiply = function(arr) {
  if(arr.length == 0) return 0;
  let prodArr = arr[0];
  for (let i = 1; i < arr.length; i++) prodArr *= arr[i];
  return prodArr;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num < 2) return 1;
  let fact = 1;
  for(let i = 2; i <= num; i++) fact *= i;
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
