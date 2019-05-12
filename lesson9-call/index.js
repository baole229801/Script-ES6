//call method

// const greeting = () => {
//     console.log(`Hi ${this.name}, Im ${this.age}!`);
// };
function greeting() {
    console.log(`Hi ${this.name} Im ${this.age}.`)
}

var cat = {
    name: 'Tom',
    age: '22'
}

greeting.call(cat);

