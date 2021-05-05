class StatValue {
    constructor() {
        this.initialValue = 0;
        this.raceBonus = 0;
        this.attributeBonus = 0;
        this.occBonus = 0;
        this.skillsBonus = 0;
        this.cyberneticBonus = 0;
        this.otherBonus = 0;
        this.name = "";
    }

    getInitialValue() {
        return this.initialValue;
    }

    getRaceBonus() {
        return this.raceBonus;
    }

    getAttributeBonus() {
        return this.attributeBonus;
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

    getOtherBonus() {
        return this.otherBonus
    }

    get total() {
        return this.initialValue + this.raceBonus + this.occBonus + this.skillsBonus + this.attributeBonus + this.cyberneticBonus + this.otherBonus;
    }

    getTotal() {
        return this.initialValue + this.raceBonus + this.occBonus + this.skillsBonus + this.attributeBonus + this.cyberneticBonus + this.otherBonus;
    }
}

module.exports = StatValue;