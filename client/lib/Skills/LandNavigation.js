const Skill = require('../Skill');

class LandNavigation extends Skill {
    constructor() {
        super();
        this.name = `Land Navigation`;
        this.group = `Wilderness`;
        this.isSecondary = `true`;
        this.note = `A group of average men can cover about five miles (8km) an hour at a brisk, but relaxed, pace through grassland, along dirt roads or pavement. Travel through dense forest or jungle at a cautious pace, with eyes open for danger, is about 1 mile (1.6km) an hour. Heavy rain or snow, fog, swamps and other environmental conditions will also reduce speed to a mile or less per hour. Map reading is done by looking at symbols (not words) and is -20%. The use of navigational instruments is not possible.`;
        this.description = `This skill enables the person to stay on course while travelling over land by means of observation and memorization. It includes mentally marking/recognizing geographic landmarks, estimating distance and movement, recognizing sounds, night travel, marking a trail, and other navigational tricks. The DM should roll once, for the player, approximately every three miles (4.8km) travelled. A failed roll means the character is drifting off course: 2D10x100 yards/meters. Consecutive failed rolls means the individual does not realize that they are off course and continues in the incorrect direction.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `4`;
        this.baseTwo = ``;
        this.base = `36`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = LandNavigation;