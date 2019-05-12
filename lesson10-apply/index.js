// apply method
// apply: func.apply(this, [param1, param2, param3,...])

function sum() {
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, num) => sum + num, 0);
}

function average() {
    const x = sum.apply(null, arguments);
    return x / arguments.length;
}

console.log(average(1, 2, 3, 6));