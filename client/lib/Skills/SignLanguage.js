const Skill = require('../Skill');

class SignLanguage extends Skill {
    constructor() {
        super();
        this.name = `Sign Language`;
        this.group = `Communication`;
        this.isSecondary = true;
        this.description = `This skill is either a) the universal sign language of the deaf, or b) the military sign language of hand signals used to indicate action, response, and combat positions in the field when verbal or radio communication would alert the enemy. Both require line of sight (i.e. one must be able to see the signer). Signing for the hearing impaired requires the sender to do a skill check per every 20 words 'signed' to successfully transmit their message. Likewise, the interpreter must roll to interpret every batch of 20 words. A failed roll means a misunderstanding yo no idea of what has been said.`;
        this.perLvl = 5;
        this.base = 25;
    }
}

module.exports = SignLanguage;