const Skill = require('../Skill');

class FlightSystemCombat extends Skill {
    constructor() {
        super();
        this.name = `Flight System Combat`;
        this.group = `Pilot`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `This skill allows the character to use specialized flight packs like the Icarus Flight System at full efficiency and take advantage of all possible bonuses. The sophisticated control system of the Icarus are as quick to react as the systems of a suit of power armour. Those without training do not get the bonuses (applicable for trick manoeuvres) listed below and base skill level is halved.`;
        this.reqOCCGroup = `This skill is exclusive to Juicers, Crazies, and similarly augmented people/O.C.C.s.`;
        this.penalty = ``;
        this.bonus = `+1 Attack per melee round while flying at levels 1, 3, 5, 8, and 11.
+2 to Dodge when flying (if the pilot has Auto-Dodge they may use it while flying).`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `45`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = FlightSystemCombat;