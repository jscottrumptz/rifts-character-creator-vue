const Skill = require('../Skill');

class AppraiseGoods extends Skill {
    constructor() {
        super();
        this.name = `Appraise Goods`;
        this.group = `Technical`;
        this.isSecondary = true;
        this.note = `Does not include the following categories:
Military goods: ( Weapons, Body Armor, Power Armor, Combat Vehicles)
Bionics
Technology
Magic items
Livestock
Slaves
Rarities

May include one of these excluded categories only if the skill is taken twice (see Bonuses).

The character knows how much they can get by pawning the item as well as what it can be sold for wholesale (to a store/business owner or retail store: 70-100% of its true value).`;
        this.description = `The trained eye able to assess the quality and true market value of 'ordinary' commodities, such as tools, household goods, clothing, furniture, jewelry, gems, art, basic vehicles (hovercycles, cars, motorcycles, bicycles, etc.), common Pre-Rifts artifacts (books, films, toys, household goods), land, and similar common trade goods.`;
        this.perLvl = 5;
        this.base = 30;
        this.takeTwiceBonus = `+15% to the base skill and add one of the excluded categories.`;
        this.takeTwice = `true`;
    }

    rollSecondary() {
        if (this.takenTwice) {
            this.skillBonus = this.skillBonus + 15;
        }
    }
}

module.exports = AppraiseGoods;