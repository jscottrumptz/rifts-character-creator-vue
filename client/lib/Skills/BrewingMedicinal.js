const Skill = require('../Skill');

class BrewingMedicinal extends Skill {
    constructor() {
        super();
        this.name = `Brewing: Medicinal`;
        this.group = `Medical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `This is the making of fermented alcoholic beverages from grains or fruits. This specifically includes wine, mead, ale, beer, and moonshine, as well as teas, elixirs, tonics, vapours (breathed in rather than drunken), and other 'brews' for medicinal purposes. Stronger types of alcohol, such as brandy, rum, whiskey, are not included, nor are the champagnes or fine wines.

The first percentile number indicates the chance of success (a failed roll means an undrinkable concoction). the second percentile indicates the quality of the brew, the higher the number, the tastier the brew.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to the Holistic Medicine [Medical] skill if this skill is taken.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = `30`;
        this.base = `25`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = BrewingMedicinal;