const Skill = require('../Skill');

class NavalHistory extends Skill {
    constructor() {
        super();
        this.name = `Naval History`;
        this.group = `Military`;
        this.isSecondary = false;
        this.description = `The basic historical knowledge of past navies, naval warfare, and naval combat vessels, as well as a general knowledge about the oceans and seas of Rifts Earth and the beings who travel them. The base skill percentage indicates the approximate degree of information the character has learned or can remember accurately.`;
        this.perLvl = 5;
        this.base = 30;
    }
}

module.exports = NavalHistory;