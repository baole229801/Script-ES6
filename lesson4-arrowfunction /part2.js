//1.
// var a = {
//     name: 'AAA',
//     run: function() {
//         var run2 = function() {
//             console.log(this.name);
//         }.bind(this);   // bind(a)
//         run2(); // run.bind(a)();
//     }
// };

//2.
// var a = {
//     name: 'AAA',
//     run: function() {
//         var run2 = () => {
//             console.log(this.name);
//         };
//         run2(); 
//     }
// };

// a.run();

//3. this = that

var a = {
    foo: 'bar',
    run: function() {
        setTimeout(() => {
            console.log(this.foo);
        }, 2000);
    }
};
a.run();