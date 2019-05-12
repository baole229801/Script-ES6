// rest

// function log(a, ...numbers) {
//     console.log(a);
//     console.log(numbers);
// }

// log(1, 2, 3, 4, 5);


const sum = (...nums) => {
    return nums.reduce((a, b) => {
        return a + b;
    }, 0)
}

console.log(sum(1, 2, 3, 4, 5));

const concat = (seperator, ...strings) => {
    return string = strings.join(seperator);
}

console.log(concat(',','a','b'));