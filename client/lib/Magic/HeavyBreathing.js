const Spell = require('../Spell');

class HeavyBreathing extends Spell {
    constructor() {
        super();
        this.name = 'Heavy Breathing';
        this.group = 'Invocation';
        this.level = 'Two';
        this.range = `60 feet (18.3 m) away.`;
        this.duration = `75 seconds (5 melee rounds) per level of experience.`;
        this.cost = `5 P.P.E.`;
        this.savingThrow = `Standard; those who save are not affected/fearful.`;
        this.description = `    The mage is able to conjure a mysterious, frightful sound of heavy, labored breathing, as if something invisible was lurking about. The spell caster can mentally manipulate the sound, increasing or decreasing the breathing rhythm, and move the sound around up to 60 feet (18.3 m) away. The breathing can be heard in a six foot (1.8 m) radius Those hearing the breathing will become fearful and panicky. There is a 01-60% chance that a frightened fellow will flee in terror. Those who hear the breathing, but do not run, will be -2 to strike, and -1 to parry and dodge as they shake in their boots.`;
    }
}

module.exports = HeavyBreathing;