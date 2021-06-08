const Skill = require('../Skill');

class Roadwise extends Skill {
    constructor() {
        super();
        this.name = `Roadwise`;
        this.group = `Rogue`;
        this.isSecondary = false;
        this.note = `Typically this skill is reserved for car thieves, Operators and City Rats.`;
        this.description = `A regional skill in which the character knows the streets, alleys, back roads, shortcuts, fastest route, construction zones, speed traps, highways, police stations and posts in their city and State (or Province) like the back of their hand. Also knows all the local junkyards, the best machine garages (including a few who do not ask questions), and the best places to hide a vehicle or lay low for a few hours or a few days, as well as the best place to 'dump' (abandon) a vehicle where it will not be found any time soon (authorities or an enemy must conduct a serious and expensive search to find it - if so roll percentile to see how quickly it is found: 1-25% = 2D4 days, 26-50% = 3D6 days, 51-75% = 3D6 weeks, 76-90% = 1D4 years, 91-96% = 1D4x10 years, 97-100% = Never!)`;
        this.perLvl = 4;
        this.base = 26;
    }
}

module.exports = Roadwise;