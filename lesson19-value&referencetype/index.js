// value type & referece type

// value type
let a = 1;
let b = 1;

console.log(a === b);

// reference type: object, array, function
let obj1 = {
    a: 1
};
let obj2 = {
    a: 2
};

console.log(obj1 === obj2)

let a1 = b;
a1 = 2;

console.log(b);

let obj3 = obj2;
obj3.a = 1;
console.log(obj3 === obj2);
console.log(obj3 === obj1);