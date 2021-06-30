const Skill = require('../Skill');

class Gardening extends Skill {
    constructor() {
        super();
        this.name = `Gardening`;
        this.group = `Domestic`;
        this.isSecondary = true;
        this.description = `The skill offers a basic understanding of plant care and aesthetic design as well as the ability to grow garden crops, and the skill to create beautiful, decorative gardens with flowers, plants, shrubs, trees, and decorative rocks that create a feeling of tranquility and harmony with nature. This skill can be practiced by anyone.`;
        this.perLvl = 4;
        this.base = 36;
        this.takeTwiceBonus = `+10%`;
        this.takeTwice = true;
    }
}

module.exports = Gardening;