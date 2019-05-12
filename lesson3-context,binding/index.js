// global context
// function context
// bind


var mouse = {
    name: 'mickey',
    sayHi: function() {
        console.log('My name is ', this.name);
    }
};

var cat = {
    name: 'Tom'
};

mouse.sayHi();  // sayHi method of mouse context, this is mouse

var say = mouse.sayHi;
var say = mouse.sayHi.bind(cat);  // bind return function with this as variable

say(); // say method of global context, this is undefined

module.exports = mouse;