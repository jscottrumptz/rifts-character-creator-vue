class Attribute {
    constructor(attributeRoll = [0], multiplier = 1, bonus = 0, feeble = false) {
        this.attributeRoll = attributeRoll;
        this.multiplier = multiplier;
        this.bonus = bonus;
        this.feeble = feeble;
        this.name = "";
        this.feebleBonus = 0;
        this.occBonus = 0;
        this.skillsBonus = 0;
        this.cyberneticBonus = 0;
        this.raceTotal = (this.attributeRoll.reduce((a, b) => a + b, 0) * this.multiplier) + this.bonus;
    }

    getAttributeRoll() {
        return this.attributeRoll;
    }

    getMultiplier() {
        return this.multiplier;
    }

    getBonus() {
        return this.bonus;
    }

    getFeeble() {
        return this.feeble;
    }

    getFeebleBonus() {
        return this.feebleBonus;
    }

    getOccBonus() {
        return this.occBonus;
    }

    getSkillsBonus() {
        return this.skillsBonus;
    }

    getCyberneticBonus() {
        return this.cyberneticBonus;
    }

    get total() {
        return this.raceTotal + this.occBonus + this.skillsBonus + this.cyberneticBonus + this.feebleBonus;
    }

    getTotal() {
        return this.raceTotal + this.occBonus + this.skillsBonus + this.cyberneticBonus + this.feebleBonus;
    }
}

module.exports = Attribute;