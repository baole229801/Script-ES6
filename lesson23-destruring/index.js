// Destructuring

// const arr = [1, 2, 3, 4, 5];
const arr = [1];
// const [a, , , d] = arr;
// const [a, ...b] = arr;
// const [a, b = 10] = arr
// console.log(a, b);

let obj = {
    a: 1,
    b: 2,
    c: 3
}

//const {a, b, c} = obj;
const {a, ...c} = obj;

console.log(a, c);