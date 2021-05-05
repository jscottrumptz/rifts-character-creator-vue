class StatRoll {
    constructor(sides = 0, amount = 0, multiplier = 1, bonus = 0) {
        this.sides = sides;
        this.amount = amount;
        this.multiplier = multiplier;
        this.bonus = bonus;
    }
}

module.exports = StatRoll;