function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log(`${this.name} is eating...!`);
}

function Bird(name) {
    Animal.apply(this, arguments);
}

Bird.prototype = new Animal();

const parrot = new Bird('parrot');
parrot.eat();