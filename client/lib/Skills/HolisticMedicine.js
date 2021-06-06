const Skill = require('../Skill');

class HolisticMedicine extends Skill {
    constructor() {
        super();
        this.name = `Holistic Medicine`;
        this.group = `Medical`;
        this.isSecondary = `false`;
        this.note = `Plants are seasonal ad the right fruit, root or leaf may not be readily available in certain times of the year/season, or may be found exclusively in remote regions. DM's should use a certain amount of logic and drama with this skill.

The first percentile is the character's ability to accurately diagnose the problem. The second percentile is the healer's skill at successfully treating the problem with herbs and making teas, tonics, or salves.

A failed roll means the treatment or concoction did not work. Can not perform surgery or amputation with this skill.`;
        this.description = `The training in the recognition, preparation, and application of natural medicines usually made from whole plants and/or their parts (roots, leaves, fruit). The Holistic Doctor is basically a pharmacist and naturalist who creates drugs from herbs and vegetation, as well as studies and treats common ailments and injury. They can find and use plants to create salves, balms, ointments, and lotions to soothe burns, boils, rashes, and insect bites, and reduce swelling, as well as create local anesthetics and salves to heal wounds faster (twice as quick as normal). Brews, potions, and tonics are created to settle upset stomachs, calm the nerves, or induce sleep or hallucinations. The individual can also make alcohol and poison (hemlock and mandrake for example).

The student of herbology also has a good knowledge of plant lore and when and where to find healing plants, edible fruit, roots, and bark, as well as how to use and/or avoid dangerous flora. The character can also preserve foods and knows how to set bones, bandage wounds, and suture cuts.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to this skill if Brewing skill is taken.
+10% to Brewing skill.
+10% to Identify Plants & Fruits skill.
+10% to Preserve Food skill.
-5% to cauterize.
-10% to treat disease/infection/poison/internal injuries.
-30% to treat alien creatures.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = `20`;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'brewing') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = HolisticMedicine;