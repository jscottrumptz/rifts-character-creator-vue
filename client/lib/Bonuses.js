const StatValue = require('./StatValue')

// also make changes in OCC and Race
class Bonuses {
    constructor(
        perception = new StatValue,
        initiative = new StatValue,
        strike = new StatValue,
        parry = new StatValue,
        dodge = new StatValue,
        roll = new StatValue,
        pull = new StatValue,
        attacks = new StatValue,
        handDamage = new StatValue,
        disarm = new StatValue,
        knockout = new StatValue,
        deathBlow = new StatValue,
        bodyFlip = new StatValue,
        critical = new StatValue,
        entangle = new StatValue,
        autoDodge = new StatValue
    ) {
        this.perception = perception;
        this.perception.name = 'Perception';
        this.initiative = initiative;
        this.initiative.name = 'Initiative';
        this.strike = strike;
        this.strike.name = 'Strike';
        this.parry = parry;
        this.parry.name = 'Parry';
        this.dodge = dodge;
        this.dodge.name = 'Dodge';
        this.roll = roll;
        this.roll.name = 'Roll w/ Punch';
        this.pull = pull;
        this.pull.name = 'Pull Punch';
        this.attacks = attacks;
        this.attacks.name = 'Attacks per Melee';
        this.handDamage = handDamage;
        this.handDamage.name = 'Damage Bonus';
        this.disarm = disarm;
        this.disarm.name = 'Disarm';
        this.knockout = knockout;
        this.knockout.name = 'Knockout/Stun';
        this.deathBlow = deathBlow;
        this.deathBlow.name = 'Death Blow';
        this.bodyFlip = bodyFlip;
        this.bodyFlip.name = 'Body Flip/Throw';
        this.critical = critical;
        this.critical.name = 'Critical';
        this.entangle = entangle;
        this.entangle.name = 'Entangle';
        this.autoDodge = autoDodge;
        this.autoDodge.name = 'Automatic Dodge';

    }

    getPerception() {
        return this.perception;
    }

    getInitiative() {
        return this.initiative;
    }

    getStrike() {
        return this.strike;
    }

    getParry() {
        return this.parry;
    }

    getDodge() {
        return this.dodge;
    }

    getRoll() {
        return this.roll;
    }

    getPull() {
        return this.pull;
    }

    getAttacks() {
        return this.attacks;
    }

    getHandDamage() {
        return this.handDamage;
    }

    getDisarm() {
        return this.disarm;
    }
}

module.exports = Bonuses;