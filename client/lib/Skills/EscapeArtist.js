const Skill = require('../Skill');

class EscapeArtist extends Skill {
    constructor() {
        super();
        this.name = `Escape Artist`;
        this.group = `Espionage`;
        this.isSecondary = false;
        this.note = `Pick Locks is a separate and distinct skill.`;
        this.description = `The methods, principles, and tricks of escape artists. The character can try slipping out of handcuffs, ropes, straitjacket, etc., using techniques that include hand positioning, tensing and relaxing muscles, keeping hand and wrist joints flexible, popping joints in and out, the study of knots, and one or more hidden lock picking tools concealed on their body.`;
        this.bonus = `+5% to the Pick Locks [Rogue, Espionage] skill if this skill is taken.`;
        this.perLvl = 5;
        this.base = 30;
    }
}

module.exports = EscapeArtist;