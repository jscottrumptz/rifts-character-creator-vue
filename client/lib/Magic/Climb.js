const Spell = require('../Spell');

class Climb extends Spell {
    constructor() {
        super();
        this.name = 'Climb';
        this.group = 'Invocation';
        this.level = 'Two';
        this.range = `Self, or others up to 40 feet away (12.2 m).`;
        this.duration = `Five minutes (20 melees) per level of experience.`;
        this.cost = `3 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    A spell that enables the enchanted individual to climb with exceptional, almost inhuman, skill, speed and agility. Skill level is 98% to climb normal, rough, climbable surfaces; speed is equal to Speed attribute. Smooth, presumably unclimbable or extremely difficult surfaces to climb normally can be scaled with a skill level of 60%. Rappelling is possible at 90%.`;
    }
}

module.exports = Climb;