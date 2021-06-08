const Skill = require('../Skill');

class TrickRiding extends Skill {
    constructor() {
        super();
        this.name = `Trick Riding`;
        this.group = `Cowboy`;
        this.isSecondary = `false`;
        this.note = `Characters without this skill can try any of these tricks, but must use the second percentage of the associated Horsemanship skill after reducing it by half. Roll for each attempt. Likewise, these stunts can be tried while riding mounts other than a horse, but reduce the skill by half unless the character also has the skill Horsemanship: Exotic Animals. If trying one of these stunts without this skill and not on a horse without the Horsemanship: Exotic Animals skill, then the second percentage is reduced by a half and halved again (effectively 3/4).`;
        this.description = `The skill of riding bareback, standing on the animal's back, hanging from the side or under its belly (usually for rodeo tricks or to hide from enemies), riding sidesaddle, as well as quick mounts and dismounts, leaping down on the animal from above or with a running start, leaping from the back of a horse onto another horse or wagon, and similar.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = `Must have one of the Horsemanship [Horsemanship] skills.`;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = `Equal to the first (larger) Horsemanship skill percentage; roll for each trick/stunt attempt.`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
        this.preq = ['horsemanship'];
    }
}

module.exports = TrickRiding;