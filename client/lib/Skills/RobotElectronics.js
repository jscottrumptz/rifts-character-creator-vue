const Skill = require('../Skill');

class RobotElectronics extends Skill {
    constructor() {
        super();
        this.name = `Robot Electronics`;
        this.group = `Electrical`;
        this.isSecondary = false;
        this.description = `The specialization in the area of micro-circuitry, military engineering, robotics, advanced computers, artificial intelligence, power armour and bionic systems.`;
        this.penalty = `The is a -40% penalty when working on alien or extremely unfamiliar robot electronics.`;
        this.required = `Electrical Engineer [Electrical] and Computer Programming [Technical].`;
        this.perLvl = 5;
        this.base = 30;
        this.preq = ['electricalEngineer', 'computerProgramming'];
    }
}

module.exports = RobotElectronics;