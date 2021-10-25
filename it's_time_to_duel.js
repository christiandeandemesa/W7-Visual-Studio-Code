class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    showStats(){
        return `spends ${this.cost} mana to summon ${this.name} with ${this.power} power and ${this.resilience} resilience!`;
    }
    increaseResilience(){
        this.resilience += 3;
        return "";
    }
    decreaseResilience(){
        this.resilience -= 2;
        return "";
    }
    increasePower(){
        this.power += 2;
        return "";
    }
    attack(ally, enemy){
        return `${ally.name} deals (${ally.power} - ${enemy.resilience}) damage to ${enemy.name}!`;
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    playAlly(effect, target){
        if(effect instanceof Effect && target instanceof Unit){
            return `spends ${effect.cost} mana to play ${effect.name}. ${effect.name} ${effect.text}, so their ${target.name}'s ${effect.stat} changes by ${effect.magnitude}!`;
        }
        else{
            throw new Error("Target must be a unit!");
        }
    }
    playEnemy(effect, target){
        if(effect instanceof Effect && target instanceof Unit){
            return `spends ${effect.cost} mana to play ${effect.name}. ${effect.name} ${effect.text}, so their opponent's ${target.name}'s ${effect.stat} changes by ${effect.magnitude}!`;
        }
        else{
            throw new Error("Target must be a unit!");
        }
    }
}

console.log("IT'S TIME TO D-D-D-D-D-D-D-D-DUEL!!!");

const unit1 = new Unit("Red Belt Ninja", 3, 3, 4);
console.log("Christian " + unit1.showStats());

const effect1 = new Effect("Hard Algorithm", 2, "increases target's resilience by 3", "resilience", "+3");
console.log("Christian " + effect1.playAlly(effect1, unit1) + unit1.increaseResilience());

const unit2 = new Unit("Black Belt Ninja", 4, 5, 4);
console.log("James " + unit2.showStats());

const effect2 = new Effect("Unhandled Promise Rejection", 1, "reduces target's resilience by 2", "resilience", "-2");
console.log("James " + effect2.playEnemy(effect2, unit1) + unit1.decreaseResilience());

const effect3 = new Effect("Pair Programming", 3, "increases target's power by 2", "power", "+2");
console.log("Christian " + effect3.playAlly(effect3, unit1) + unit1.increasePower());

console.log(unit1.attack(unit1, unit2));