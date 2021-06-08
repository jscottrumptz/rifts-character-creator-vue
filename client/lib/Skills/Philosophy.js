const Skill = require('../Skill');

class Philosophy extends Skill {
    constructor() {
        super();
        this.name = `Philosophy`;
        this.group = `Technical`;
        this.isSecondary = true;
        this.description = `The principles of philosophy, ethics and morals, methods for effective debating and examining a subject from a wide perspective, and touching upon aspects of sociology and social consciousness.`;
        this.perLvl = 5;
        this.base = 30;
    }
}

module.exports = Philosophy;