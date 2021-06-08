const Skill = require('../Skill');

class HovercyclesOrSkycyclesOrRocketBikes extends Skill {
    constructor() {
        super();
        this.name = `Hovercycles  or  Skycycles  or  Rocket Bikes`;
        this.group = `Pilot`;
        this.isSecondary = true;
        this.description = `The character who select the skill Hover Craft (Ground) can drive hover cars, hover trucks, and hovercycles on a basic level. However, those who specifically select this skill can pilot any type of hovercycle, rocket bike, skycycle (like the Sky King), or jet propelled one- or two-man hover ground or air vehicles with greater skill and finesse. They can perform spectacular jumps (20 feet (6.1m) + 7 feet (2.1m) per additional level of experience), stop on a dime, perform dive-drops (soar off the edge of a cliff or skyscraper, keep control of the hovercycle as it drops, land on the ground without crashing or falling off and keep on going; 120 feet (36.6m) drop + 20 feet (6.1m) per additional level of experience), and perform tricks, stunts, jumps, and dodging without penalty.`;
        this.perLvl = 3;
        this.base = 70;
    }
}

module.exports = HovercyclesOrSkycyclesOrRocketBikes;