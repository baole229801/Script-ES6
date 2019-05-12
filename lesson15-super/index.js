// super

class Hero {
    constructor(name, hp, damage) {
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }

    applyDamage(damage) {
        this.hp -= damage;
    }

    attack(enemy) {
        enemy.applyDamage(this.damage);
    }
}

class SuperHero extends Hero {
    constructor(name, hp, damage, range) {
        super(name, hp, damage);
        this.range = range;
    }

    attack(enemy) {
        super.attack(enemy);
        this.hp += this.damage;
    }
}

const heroA = new SuperHero('A', 50, 20, 5);
const heroB = new Hero('B', 60, 15);

while (true) {
    heroA.attack(heroB);
    heroB.attack(heroA);

    if (heroB.hp <= 0) {
        console.log({
            heroA,
            heroB
        });
        return false;
    }
}