// cannot constructor function as arrow function
// const Mouse = name => {
//     this.name = name;
// };

function Mouse(name) {
    this.name = name;
};

Mouse.prototype.run = function() {
    console.log(`${this.name} is running...!`);
};

const mickey = new Mouse('Mickey');
mickey.run();

// Object literals
const jerry = {
    name: 'Jerry',
    run: function() {
        console.log(`${this.name} is running...!`)
    }
};

jerry.run();

// Enhanced object literals
const name = 'Tom';

const cat = {
    name,
    run() {
        console.log(`${this.name} is running...!`);
    }
};

cat.run();