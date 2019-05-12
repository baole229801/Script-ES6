// Array-like objects & arguments

// const name = ['Thanh', 'Trang', 'Thuy'];
// for (let i = 0; i < 3; i++) {
//     console.log(name[i]);
// };

// const obj = { //obj required key = index, length attribute
//     0: 'Thanh',
//     1: 'Trang',
//     2: 'Thuy',
//     length: 3
// };

// for (let i = 0; i < obj.length; i++) {
//     console.log(obj[i]);
// };

// const sum = (a, b) => {
//     return a + b;
// };

// function sum() {
//     let result = 0;
//     for (let i= 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }
//     return result;
// };

function sum() {
    const numbers = Array.from(arguments);
    return result = numbers.reduce((sum, num) => {
        return sum + num;
    }, 0);
};

console.log(sum(1, 2, 3, 5, 6, 8, 10));