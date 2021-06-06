const Skill = require('../Skill');

class Brewing extends Skill {
    constructor() {
        super();
        this.name = `Brewing`;
        this.group = `Domestic`;
        this.isSecondary = `true`;
        this.note = `Stronger types of alcohol, such as brandy, rum, and whiskey, are not included, nor are champagnes or fine wines.

The first percentile indicates the chance of success (a failed roll means an undrinkable concoction). The second percentile indicates the quality of the brew: the lower the number rolled, the tastier the drink.`;
        this.description = `The making of fermented alcoholic beverages from grains or fruits and specifically includes wine, mead, ale, beer, and moonshine, as well as common teas, coffee, lemonade, and similar types of prepared drinks.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to Holistic Medicine skill.
+10% to this skill if Holistic Medicine is taken`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = `30`;
        this.base = `25`;
        this.takeTwiceBonus = `+10%`;
        this.takeTwice = `true`;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'holisticMedicine') {
                this.skillBonus = this.skillBonus + 10;
            }
        })
        if (this.takenTwice) {
            this.skillBonus = this.skillBonus + 10;
        }
    }
}

module.exports = Brewing;