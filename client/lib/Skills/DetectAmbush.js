const Skill = require('../Skill');

class DetectAmbush extends Skill {
    constructor() {
        super();
        this.name = `Detect Ambush`;
        this.group = `Espionage`;
        this.isSecondary = false;
        this.description = `The training that develops an eye for spotting locations and terrains suitable for ambushes and being ambushed. It also provides a rudimentary knowledge of guerrilla tactics used by the enemy. The Detect Ambush skill gives its user the ability to spot potential ambush sites based on terrain and possible modes of attack. It is not specific enough to detect individuals prowling.`;
        this.perLvl = 5;
        this.base = 30;
    }
}

module.exports = DetectAmbush;