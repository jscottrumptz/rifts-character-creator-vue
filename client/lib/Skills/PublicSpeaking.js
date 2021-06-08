const Skill = require('../Skill');

class PublicSpeaking extends Skill {
    constructor() {
        super();
        this.name = `Public Speaking`;
        this.group = `Communication`;
        this.isSecondary = true;
        this.description = `The training in the quality of sound, tone, pitch, enunciation, clarity, and pacing when speaking to the public. The character speaks loudly, distinctly, and in a pleasing manner. Also includes the practice of good, enticing storytelling, dramatic pauses, and composition of the spoken word. A successful roll indicates the overall quality and charisma of the speaker and the spoken word: people are enjoying listening to the character.`;
        this.bonus = `+5% to the Performance [Communication] skill if this skill is taken.`;
        this.perLvl = 5;
        this.base = 30;
    }
}

module.exports = PublicSpeaking;