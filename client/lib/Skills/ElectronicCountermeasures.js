const Skill = require('../Skill');

class ElectronicCountermeasures extends Skill {
    constructor() {
        super();
        this.name = `Electronic Countermeasures`;
        this.group = `Communication`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The ability to shield, encrypt and protect electronic transmissions, as well as jamming, scrambling, coding and decoding radio, video and wireless transmissions. This skill also includes knowledge in the use of technology to locate electronic bugs/listening devices and deactivate, undermine and otherwise circumvent them. The sue of electronic masking, scrambling and unscrambling equipment, as well as codes to help foil the detection, interception and interpretation of radio and wireless transmissions is all part of this skill. A radio operator who makes a successful roll can transmit coded or scrambled messages without fear that the enemy will intercept or understand the transmission.

Jamming military or police communications can cause unit confusion and disrupt communications. Military organization breaks down, causing a loss of effectiveness to a;; but the best units. Just about any high-powered radio can be used for jamming. Armed with a radio, a small guerrilla unit can completely disrupt the manoeuvres of large enemy groups. This skill also enables the radio operator to 'follow' the enemy's attempted transmissions over jammed frequencies to trace their location or direction of travel. This tactic is extremely useful in finding and eliminating bugs, transmission units, surveillance teams on a steak out, small squads and enemies in distress.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = `Radio: Basic`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
        this.preq = ['radioBasic'];
    }
}

module.exports = ElectronicCountermeasures;