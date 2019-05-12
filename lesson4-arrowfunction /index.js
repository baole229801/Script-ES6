// arrow function expression
// fat arrow

// function sum(a, b) {
//     return a + b;
// };

// var sum2 = function(a, b) {
//     return a + b;
// }


var sum = (a, b) => {
    return a + b;
};

//var sum = (a, b) => a + b;

var square = x => x*x;

var doSomething = () => Date.now();

var arr = [1, 2, 3];
var arr1 = arr.map(x => x*x);

console.log(arr1);
