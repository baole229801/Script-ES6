// ...spread

const a = [1, 2, 3];
const b = [0, ...a, 4];

console.log(b);

function sum() {

}

sum(1, 2, 3, 4);
sum(...a) // sum(1, 2, 3)