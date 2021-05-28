const Skill = require('../Skill');

class RobotCombatElite extends Skill {
    constructor() {
        super();
        this.name = `Robot Combat: Elite`;
        this.group = `Pilot`;
        this.isSecondary = `false`;
        this.note = `Damage:
As per Robot P.S. Each power armour description will list the damage under the damage under the 'Elite' hand to hand stat block.`;
        this.description = `Each robot or power armourtype has different weapon systems, hand to hand aptitude, and quirks that make each specific type unique. Because each handles differently, the 'elite' pilot studies individual types of robot war machines to familiarize themselves with every element of that specific type of robot. This means the pilot must select the Robot Combat: Elite skill for each specific robot or power armour type in which they desire to be an expert operator to enjoy its maximum combat effectiveness. Elite training automatically gives the pilot a basic understanding and the ability to pilot ALL standard types of robot vehicles and power armour at the 'basic' level plus one 'elite' class of power armour or robot. This skill may be taken mulitple times to pilot several robots at the elite level.

Robot Combat: Elite is usually reserved for specialists in the military or mercenaries such as the famous Glitter Boys; however, just about anybody can learn to pilot and fight with a robot or power armour. There is no base skill percentage because the pilot gets specific bonuses and abilities imparted by Robot Combat training as detailed below.

If the character already has the Robot Combat: Basic skill, taking this skill supercedes any bonuses and abilities from that skill, but the 'elite' bonuses and abilities only apply to that type chosen to be 'elite.' All bonuses are in addition to the pilot's own hand to hand combat training and attribute bonuses. They do not apply to the pilot's physical abilities outside of the robot vehicle or power armour.

Type Examples:-
SAMAS and CS power armour with the numerical designation PA-double digits 'A' (e.g. PA-07A) are one type.
CS power armour with three digits (i.e. PA-100,PA-200, etc. including the Mauler, Terror Trooper, and Gitter Boy Killer) are on type.
All UAR robots constitutes one type.
All IAR bots constitutes one type.
All Titan TR-three digit series (i.e. X-10A Predator) are one type.
All Titan X-triple digit series (i.e. X-500 Forager) are one type.
All Titan X-four digit series (i.e. X-1000 Ulti-Max) are one type.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `These are specific to the types of robot and power armours and are too numerous to be listed here in their entirety. Those listed below are the categories and the usual bonuses and abilities gained by having Robot Combat: Elite for that category.

Flying Power Armour
Ground-Based Power Armour
Heavy Vehicular Robots
Heavy Ground Robots
Light Ground Robots`;
        this.required = `Pilot: Robots & Power Armour.`;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = RobotCombatElite;