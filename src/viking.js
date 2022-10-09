// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
        this.strength = strength
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}



// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength, name);
        this.name = name
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}



// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else if (this.health <= 0) {
            return `A Saxon has died in combat`;
        }
    }
}





//War

class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    

addViking(viking) {
    this.vikingArmy.push(viking);
}


addSaxon(saxon) {
    this.saxonArmy.push(saxon);
}


vikingAttack() {
    let randomSaxIndex = Math.floor(this.saxonArmy.length * Math.random());
    let randomSaxon = this.saxonArmy[randomSaxIndex];
    let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
    let damage = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxIndex,1)
    }
    return damage;
}


saxonAttack() {
    let randomVikIndex = Math.floor(this.vikingArmy.length * Math.random());
    let randomViking = this.vikingArmy[randomVikIndex];
    let randomSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
    let result = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) {
        this.vikingArmy.splice(randomVikIndex,1)
    }
    return result;
}

}




//vikingArmy.push(viking);





let viking1 = new Viking ("Bjorn", 100, 100);
// // console.log(bojn.receiveDamage(50));
console.log(viking1);