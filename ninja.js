class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        return "My name is " + this.name;
    }
    showStats(){
        return this.sayName() + ", my health is " + this.health + ", my speed is " + this.speed + ", and my strength is " + this.strength;
    }
    drinkSake(){
        this.health += 10;
        return `${this.name}'s health rose by 10!'`
    }
}

const ninja1 = new Ninja("Bianca", 100);
console.log(ninja1.sayName());
console.log(ninja1.showStats());
console.log(ninja1.drinkSake());
console.log(ninja1.showStats());