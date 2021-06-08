const Skill = require('../Skill');

class ImitateVoicesAndSounds extends Skill {
    constructor() {
        super();
        this.name = `Imitate Voices & Sounds`;
        this.group = `Rogue`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The ability to imitate voices,accents, and expressions of different vocal systems, dialects and languages. The first number indicates the character's ability to change their voice and imitate accents, inflections and expressions from other regions. A successful roll means they have disguised their normal/true speaking voice and accent, and convincingly sounds like they are from another region or part of the world. Attempting to accurately imitate the voice, inflections, and attitude of a specific person is much more difficult, and the character will either need to know the person being imitate very well, or have spent hours studying them, and even then there is a penalty of -20%.

The second number indicates the ability to duplicate various calls, screams, chirps, and buzzes that are found in the wilderness. Distinctive calls are often used as signals during sneak attacks, with different calls meaning to the people who know them 'all is calm/quiet,' 'guard on watch,' 'move cautiously,' 'danger,' and 'attack!'`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to the Impersonation [Espionage] skill if this skill is taken.`;
        this.required = ``;
        this.perLvl = `4`;
        this.baseTwo = `36`;
        this.base = `42`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = ImitateVoicesAndSounds;