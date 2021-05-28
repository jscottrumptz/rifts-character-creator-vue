const Skill = require('../Skill');

class Spelunking extends Skill {
    constructor() {
        super();
        this.name = `Spelunking`;
        this.group = `Wilderness`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The art and practice of exploring underground caves.Spelunking is the knowledge of caves and cave types and their individual characteristics.This skill enables the character to navigate a cave or underground cave network, retain a sense of direction (including up and down), have a sense of the cave's depth, know how to make subtle markings and note formations to find one's way outand to better navigate the caves at a later date, as well as rock climbing. The spelunker can answer questions about a cave system, such as what it is called (if it is a named landmark), where it may lead, how deep it continues, what type of rock it leads through and so on. This skill also lends familiarity with the correct equipment needed to go spelunking, and how to apply it. It also includes the knowledge to recognize and identify various dangers, identifying the flora and fauna of cave systems and finding and climbing the best routes and direction.

Unskilled characters wandering about in a large series of natural caverns have about the same chance of survival as unskilled climbers attempting to scale a major mountain without guidance or equipment.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to this skill if the character also has Climbing.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `35`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Spelunking;