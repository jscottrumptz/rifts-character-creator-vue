const Skill = require('../Skill');

class AppraiseGoodsSpecialized extends Skill {
    constructor() {
        super();
        this.name = `Appraise Goods: `;
        this.group = `Technical`;
        this.isSecondary = true;
        this.description = `Same as the base skill, but now also Includes ONE of the following categories:
Military goods: ( Weapons, Body Armor, Power Armor, Combat Vehicles)
Bionics
Technology
Magic items
Livestock
Slaves
Rarities

The character knows how much they can get by pawning the item as well as what it can be sold for wholesale (to a store/business owner or retail store: 70-100% of its true value).`;
        this.perLvl = 5;
        this.base = 45;
        this.textEntry = 'Enter Goods Category';
        this.removePostPick = false;
        this.preq = ['appraiseGoods'];
    }
}

module.exports = AppraiseGoodsSpecialized;