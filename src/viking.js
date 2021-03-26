// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    
    attack() {
        return this.strength
    }

    receiveDamage(amountOfDamage) {
        this.health = this.health - amountOfDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    attack() {
        return this.strength
    }

    receiveDamage(amountOfDamage) {
        this.health = this.health - amountOfDamage
        if(this.health > 0){
            return `${this.name} has received ${amountOfDamage} points of damage`
        } else{
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    receiveDamage(amountOfDamage) {
        this.health = this.health - amountOfDamage
        if(this.health > 0){
            return `A Saxon has received ${amountOfDamage} points of damage`
        } else {
            return 'A Saxon has died in combat'
        }
    }
}

// War
class War {
    constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    
    vikingAttack() {
        const randomSaxonIndex = Math.floor(Math.random()* this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomViking = this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)];
        const strength =  randomViking.attack();
        const damage = randomSaxon.receiveDamage(strength);
        if(randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1)
        }
        return damage
    }

    saxonAttack() {
        const randomVikingIndex = Math.floor(Math.random()* this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.length)];
        const strength = randomSaxon.attack();
        const damage = randomViking.receiveDamage(strength);
        if(randomViking.health <= 0){
            this.vikingArmy.splice(randomVikingIndex, 1)
        }
        return damage
    }

    showStatus() {
        if(this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!'
        } else if(this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
    
    
}




