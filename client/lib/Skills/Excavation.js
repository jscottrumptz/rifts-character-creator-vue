const Skill = require('../Skill');

class Excavation extends Skill {
    constructor() {
        super();
        this.name = `Excavation`;
        this.group = `Technical`;
        this.isSecondary = true;
        this.note = `Tunnels and excavation sites that are made quickly are not permanent, and can be collapsed by gunfire, earthquakes, traffic vibrations, etc. Trying excavations without this skill is just asking for trouble and is performed on pure luck.`;
        this.description = `The mixed bag of abilities that includes finding one's direction through underground rooms, estimating one's approximate depth, 'digging out' and identifying relics and evidence from debris, as well as digging out and fording-up/repairing collapsed tunnels and underground chambers and caves. This skill gives the character a good understanding of how to best perform an excavation without any major setbacks, where to dig, what is the best type of soil, how deep to go, how to pack and secure tunnel walls and ceilings, where to place support beams and what building materials to use in underground construction.`;
        this.bonus = `+5% to the Dowsing [Wilderness] skill if this skill is taken. (only when looking for an underground river or spring).
+5% to the Spelunking [Wilderness] skill if this skill is taken.`;
        this.perLvl = 5;
        this.base = 30;
    }
}

module.exports = Excavation;