const Skill = require('../Skill');

class Parachuting extends Skill {
    constructor() {
        super();
        this.name = `Parachuting`;
        this.group = `Military`;
        this.isSecondary = false;
        this.description = `The methods, procedures, and techniques of parachuting, packing the chute, skydiving, precision landing. landing without injury, and practice of jumping from a high altitude aircraft. The advantage of parachuting is secrecy, since the troopers' insertion into enemy territory is silent and often goes unnoticed.

HAHO (High-Altitude-High-Opening) jumps take place from a height of 25,000-30,000 feet (7620-9144m) but the paratrooper does not pop the chute until an altitude of 4,000 feet (1220m) or less to avoid detection. LALO (Low-Altitude-Low-Opening) drops are made at the mere height of 300-500 feet (91.4-152m). Even if the jump goes without a hitch, there is a 20% chance of taking 6D6 S.D.C. from an awkward landing, even if wearing M.D. armour.

Failure on a Parachuting roll indicates that there are complications somewhere along the jump and the chute does not open, or opens late. Even a character in M.D.C. armour will take damage from the high velocity impact! 1D6x10+60 direct to Hit Points!!`;
        this.perLvl = 5;
        this.base = 40;
    }
}

module.exports = Parachuting;