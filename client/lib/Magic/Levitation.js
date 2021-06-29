const Spell = require('../Spell');

class Levitation extends Spell {
    constructor() {
        super();
        this.name = 'Levitation';
        this.group = 'Invocation';
        this.level = 'Two';
        this.range = `Up to 60 feet (18.3 m) away.`;
        this.duration = `Three minutes (12 melee rounds) per level of experience.`;
        this.cost = `5 P.P.E.`;
        this.savingThrow = `Standard.`;
        this.description = `    Magic levitation enables the invoker of the magic to raise himself, or other people, or an object, straight up into the air and suspend it there (hover). Movement is limited to straight up and down; no horizontal motion is possible. Weight is restricted to 200 lbs (90 kg) plus 20 lbs (9 kg) per level of experience. Unwilling victims of the magic get a saving throw; a successful save roll means the character is not affected by the levitation and remains planted firmly on the ground. Maximum height possible is 60 feet (18.3 m) plus to feet (3 m) per each level of experience. Targets can be affected up to 60 feet (18.3 m) away.`;
    }
}

module.exports = Levitation;