const Skill = require('../Skill');

class Psychology extends Skill {
    constructor() {
        super();
        this.name = `Psychology`;
        this.group = `Medical`;
        this.isSecondary = false;
        this.description = `The principles, theories, and evaluation of human behaviour as they apply to psychology and psycho-therapy. Includes analysis, understanding and treatment of emotional and mental illness, motivational and perceptual disorders, personality assessment, alcoholism, drug abuse and treatment, and other aspects and studies of the mind and human behaviour.`;
        this.required = `Biology [Science], Chemistry [Science], and Literacy [Communication].`;
        this.perLvl = 5;
        this.base = 35;
        this.preq = ['biology', 'chemistry', 'literacy'];
    }
}

module.exports = Psychology;