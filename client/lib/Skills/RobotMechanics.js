const Skill = require('../Skill');

class RobotMechanics extends Skill {
    constructor() {
        super();
        this.name = `Robot Mechanics`;
        this.group = `Mechanical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The specific study of advanced mechanics as it applies to robotics. Those trained in this discipline can repair, modify, build, and sabotage robots, including industrial robot machines, power armour, military drones, and robot vehicles. There is a -30% penalty when working with alien robots, advanced, experimental, and military robots and 'bots with magic components.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = `Mechanical Engineer and Electrical Engineer.`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `20`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
        this.preq = ['mechanicalEngineer', 'electricalEngineer']
    }
}

module.exports = RobotMechanics;