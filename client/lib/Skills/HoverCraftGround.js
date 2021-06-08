const Skill = require('../Skill');

class HoverCraftGround extends Skill {
    constructor() {
        super();
        this.name = `Hover Craft: Ground`;
        this.group = `Pilot`;
        this.isSecondary = true;
        this.description = `The knowledge needed to pilot all types of hover vehicles used for ground transport, including basic hovercycles and hover trucks. These vehicles can be tricky, because they utilize several air jets and directional thrusters that push the craft on a cushion of air 1-3 feet (0.3-0.9m) above the ground. The vehicles can usually attain great speeds (100-160 mph/160-256 kph), are capable of driving over incredibly rugged terrain,and making jumps over small craters, ravines, boulders, and fallen trees (10 feet/3m +4 feet/1.2m per additional level of experience).`;
        this.penalty = `-20% to piloting when pulling jumps, tricks, dodging gunfire, or stunt driving.`;
        this.perLvl = 5;
        this.base = 50;
    }
}

module.exports = HoverCraftGround;