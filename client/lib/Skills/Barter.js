const Skill = require('../Skill');

class Barter extends Skill {
    constructor() {
        super();
        this.name = `Barter`;
        this.group = `Communication`;
        this.isSecondary = true;
        this.description = `The skill of bargaining with merchants, businessmen, thieves, traders, and other characters to get a fair price or fair exchange of trade goods or services. Depending on the character's point of view and effort at bartering, they can raise the amount they get or lower the price they pay by 3D6+2%; not applicable to rare items and alien technology. Generally, if the haggler rolls under their Barter skill percentage, they get the discount when buying or the better price when they are the one doing the selling or trading. If the price is disputed, the two bartering characters can each make rolls, the highest successful roll wins and gets their price and not a penny less or nickle more.`;
        this.reqOCCGroup = `Adventurer & Scholar`;
        this.bonus = `+2% to this skill if Literacy [Communication] is also taken.
+2% to this skill if Mathematics: Basic [Science] is also taken.`;
        this.perLvl = 4;
        this.base = 30;
    }

    rollSecondary(character, list) {
        // set a trigger to only add bonus for one literacy skill in case character has multiple
        let gotLit = false;
        // search for literacy and mathematics basic
        list.forEach(skill => {
            if((skill.includes('literacy') && !gotLit)|| skill === 'mathematicsBasic') {
                this.skillBonus = this.skillBonus + 2;
                gotLit = true;
            }
        })
    }
}

module.exports = Barter;